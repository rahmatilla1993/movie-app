import React from "react";
import Movie from "../movie/";
import "./movies.css";

const Movies = (props) => {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((item) => {
          return <Movie key={item.imdbID} {...item} />;
        })
      ) : (
        <h4>Hech narsa topilmadi</h4>
      )}
    </div>
  );
};

export default Movies;
