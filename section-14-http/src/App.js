import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  //f to store the returned movies
  const [movies, setMovies] = useState([])

async function fetchMoviesHandler() {
    const response = await  fetch("https://swapi.dev/api/films/")
    // convert resonse to json format
    const movieData = await response.json()
    // make new object with only the data fields we need
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
