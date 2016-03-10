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
            <div>
                <h4 clasName="page-header">Search Movies</h4>
                <form onSubmit={this.handleChange.bind(this)}>
                    <input type="text" placeholder="Enter a movie name..." className="form-control"
                           ref="moviename"/>
                </form>
            </div>
        )
    }
}

export default Search;