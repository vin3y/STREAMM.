import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //if [] is empty run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //https://api.themoviedb.org/3/frtchurl
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https://www.youtube.com/watch?v=XtMThy8QKqU&t=181s
          const urlParms = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParms.get("v"));
          //everything after v in the link
        })
        .catch((error) => console.log(error));
    }
  };

  console.log(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row__posters">
        {/* image containers-> posters */}

        {/* list pf movies */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
