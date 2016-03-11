import React, {Component} from 'react';
import Movie from './Movie.jsx';
class MoviesList extends Component{
    render(){
        return(
            <div>
                <h3 className="text-center">Results</h3>
                {
                    this.props.movies.map(function(movie, index) {
                        return <Movie movie={movie} key={index}/>
                    })

                }
            </div>
        )
    }
}

export default MoviesList;