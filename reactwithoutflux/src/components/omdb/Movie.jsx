import React, {Component} from 'react';

class Movie extends Component{
    render(){
        const {movie} = this.props.movieData;
        return(
            <div className="well">
                <div className="row">
                    <div className="col-md-12">
                        <img src={this.props.movieData.Poster} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;