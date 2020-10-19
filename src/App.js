import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'
class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  }

  getMovieList = async () =>{
    const {data:{
      data:{
        movies
      }
    }} = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({movies:movies,isLoading:false});
  }
  componentDidMount(){
    this.getMovieList();
  }
  render(){
    const {isLoading,movies} = this.state;

    const movieList = movies.map(current => {
        return (<Movie 
          id={current.id} 
          title={current.title} 
          year={current.year} 
          summary={current.summary} 
          poster={current.medium_cover_image} 
          key={current.id}
          rating={current.rating}
          genres={current.genres}/>)
      })
    
    return (
      <section className="container">
        {isLoading ? 
        <div className="loader">
          <span className="loader__text" >
            Loading
          </span>
        </div>
         : 
         <div className="movies"> 
            {movieList}
         </div>
         }
      </section>
    )
  }
}

export default App;
