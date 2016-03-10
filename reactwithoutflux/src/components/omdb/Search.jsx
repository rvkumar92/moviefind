import React, {Component} from 'react';

class Search extends Component{
    render(){
        return(
            <div>
                <h4 clasName="page-header">Search Movies</h4>
                <input type="text" placeholder="Enter a movie name..." className="form-control"/>
            </div>
        )
    }
}

export default Search;