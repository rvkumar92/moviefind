import React, {Component} from 'react';
import Search from './omdb/Search.jsx';
import MoviesList from './omdb/MoviesList.jsx';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieData: [],
            movieName: 'superman'
        }
    }
    getMovieData(){
        $.ajax({
            url: 'http://www.omdbapi.com/?s='+this.state.movieName,
            dataType: 'json',
            cache: false,
            success: function(data){
                console.log(data.Search);
                this.setState({movieData: data.Search});
            }.bind(this),
            error: function(xhr, status, error){
                console.log(data);
                this.setState({movieData: null});
                alert(data);
            }
        });
    }
    componentWillMount(){
        this.getMovieData();
    }
    setMovieName(movie){
        this.setState({movieName: movie},function(){
            this.getMovieData();
        });

    }
    render(){
        if(this.state.movieData != ''){
            var movieList = <MoviesList movies={this.state.movieData} />;
        }
        return(
            <div>
                <Search movieName={this.setMovieName.bind(this)}/>
                <br />
                {movieList}
            </div>
        )
    }
}

export default App;