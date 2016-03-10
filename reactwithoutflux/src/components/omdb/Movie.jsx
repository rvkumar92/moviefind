import React, {Component} from 'react';

class Movie extends Component{
    render(){
        return(
            <div className="well">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.movieData.Poster} className="thumbnail"/>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            <li className="list-group-item">Title - {this.props.movieData.Title}</li>
                            <li className="list-group-item list-group-item-info">Actors - {this.props.movieData.Actors}</li>
                            <li className="list-group-item">Director - {this.props.movieData.Director}</li>
                            <li className="list-group-item list-group-item-info">IMDBRating - {this.props.movieData.imdbRating}</li>
                            <li className="list-group-item ">Plot - {this.props.movieData.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
        const {movie} = this.props.movieData;
    }
}

export default Movie;