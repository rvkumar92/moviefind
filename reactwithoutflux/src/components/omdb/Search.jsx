import React, {Component} from 'react';

class Search extends Component{
    handleChange(e){
        e.preventDefault();
        let movie = this.refs.moviename.value.trim();
        this.props.movieName(movie);
        this.refs.moviename.value = '';
    }
    render(){
        return(
            <div className="search-form">
                <h4 className="text-center">Search Movies</h4>
                <form onSubmit={this.handleChange.bind(this)}>
                    <div className="form-group">
                        <input type="text" placeholder="Enter a movie name..." className="form-control"
                           ref="moviename"/>
                    </div>
                    <button className="btn btn-primary btn-block">Search Movies</button>
                </form>
            </div>
        )
    }
}

export default Search;