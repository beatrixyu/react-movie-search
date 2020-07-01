import React, { useState } from "react";
import MovieCard from "./movieCard";

export default function MoviesSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const movieSearch = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=263f66f57fc5f5bf1091e277d1f2e955&query=${query}&language=en-US&page=1`;
    //const url = `https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}/episode/{episode_number}?api_key=263f66f57fc5f5bf1091e277d1f2e955&language=en-US`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      console.log(data.results);
      setMovies(data.results);
      console.log(e.target.value);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={movieSearch}>
        <label className="label" htmlFor="query">
          Looking for a Movie?
        </label>

        <input
          className="input"
          type="text"
          placeholder="ie Spiderman"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>

        <button className="button" type="submit">
          Click to Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </div>
    </>
  );
}
