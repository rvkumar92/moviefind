import React, {Component} from 'react';
import Search from './omdb/Search.jsx';
import Movie from './omdb/Movie.jsx';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieData: [],
            movieName: 'frozen'
        }
    }
    getMovieData(){
        $.ajax({
            url: 'http://www.omdbapi.com/?t='+this.state.movieName+'&y=&plot=short&r=json',
            dataType: 'json',
            cache: false,
            success: function(data){
                console.log(data);
                this.setState({movieData: data});
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
    render(){
        return(
            <div>
                <Search {...this.state}/>
                <br />
                <Movie {...this.state} />
            </div>
        )
    }
}

export default App;