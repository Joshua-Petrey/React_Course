import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  //f to store the returned movies
  const [movies, setMovies] = useState([])

  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films/")
      .then(response => {
        // return results in json format
        return response.json()
      })
      .then(movieData => {
        // create new object containing only the info we want
        const tranformedMovies = movieData.results.map(movie => {
          return {
            id: movie.episode_id,
            title: movie.title,
            release_date: movie.release_data,
            opening_crawl: movie.opening_crawl,
          }
        })
        // store movies in state
        setMovies(tranformedMovies)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
