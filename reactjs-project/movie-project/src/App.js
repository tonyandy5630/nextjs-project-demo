import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import MoviesList from "./components/MoviesList";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMovieHandler = async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    const transformMovies = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    setMovies(transformMovies);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && <MoviesList movies={movies} />} */}
        {isLoading ? (
          <Skeleton animation='wave' variant='rounded'>
            <MoviesList movies={movies} />
          </Skeleton>
        ) : (
          <MoviesList movies={movies} />
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
