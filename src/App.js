// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const API_KEY = "e44046ee";
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Search) setMovies(data.Search);
  };

  return (
    <div className="App">
      <h1>Movie Listing App 🎬</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
