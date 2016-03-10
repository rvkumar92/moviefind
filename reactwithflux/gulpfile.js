var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    reactify = require('reactify');


gulp.task('browserify',function(){
    browserify('./src/js/index.js')
        .transform('reactify')
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy',function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('src/**/*.*',['browserify','copy']);
});

