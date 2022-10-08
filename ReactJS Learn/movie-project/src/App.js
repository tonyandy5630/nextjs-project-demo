import React, { useState, useEffect, useCallback } from "react";
import { Skeleton } from "@mui/material";
import MoviesList from "./components/MoviesList";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error(" Something went wrong");
      }
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
    } catch (error) {
      setHasError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && <MoviesList movies={movies} />} */}
        {isLoading ? (
          <Skeleton
            animation='pulse'
            variant='rounded'
            width='100%'
            height={300}
          >
            {" "}
            <MoviesList movies={movies} />{" "}
          </Skeleton>
        ) : (
          <MoviesList movies={movies} />
        )}
        {!isLoading && hasError && <p>{hasError} </p>}
      </section>
    </React.Fragment>
  );
}

export default App;
