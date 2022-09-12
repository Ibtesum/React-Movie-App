import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg'

import MovieCard from "./MovieCard";

// 72657b24
const API_URL = 'http://www.omdbapi.com?apikey=72657b24'



const App = ()=> {
  const [movies, setMovies]= useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title)=> {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    /* fetch(`${API_URL}&s=${title}`)
      .then(response => response.json())
      .then(data => {
        console.log("data", data)
      }) */


    setMovies(data.Search)
  }


  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  

  return (
    <div className="app">
      <h1>MovieLand</h1>
      
      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") searchMovies(searchTerm)
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 
          ? (
            <div className="container">
              {movies.map((movie)=>(
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }


      
    </div>
  );
}

export default App;