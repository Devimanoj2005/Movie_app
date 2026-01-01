// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    if (!query) return;

    const API_KEY = "522a9ca5";

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError("No movies found 😕");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie Listing App</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <p style={{ marginBottom: "20px" }}>{error}</p>}

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
