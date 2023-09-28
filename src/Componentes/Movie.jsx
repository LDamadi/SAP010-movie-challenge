import React from "react";
import { DefaultContext } from "react-icons";

const Movie = (props) => {
  return (
    <>
           {props.movies.map((movies, index)=> (
           <div className="d-flex justify-content-start m-3">
                <img src={movies.Poster} alt="movie"></img>
           </div>
           ))}
    </>
  );
};

export default Movie;