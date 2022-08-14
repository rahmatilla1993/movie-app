import React from "react";
// import "./movie.css";

const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: image,
  } = props;
  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={image} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
