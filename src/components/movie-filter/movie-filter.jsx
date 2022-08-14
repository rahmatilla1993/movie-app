import React from "react";
import "./movie-filter.css";

class MovieFilter extends React.Component {
  state = {
    type: "all",
  };

  onChecked = ({ target }) => {
    const type = target.dataset.type;
    this.setState({ type });
    this.props.filterMovies(type);
  };

  render() {
    return <div className="check-types"></div>;
  }
}

export default MovieFilter;
