import React, {Component} from 'react';

class Movie extends Component{
    render(){
        var link = 'http://www.imdb.com/title/'+this.props.movie.imdbID;
        return(
            <div className="well">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.movie.Poster} className="thumbnail"/>
                    </div>
                    <div className="col-md-8">
                        <h4>{this.props.movie.Title}</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Year released: {this.props.movie.Year} </li>
                            <li className="list-group-item">IMDB Id: {this.props.movie.imdbID}</li>
                        </ul>
                        <a className="btn btn-primary" href={link}>Visit IMDB</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;