import React, { Component } from "react";
import Movies from "../../components/movies/";
import Search from "../../components/search/";
import PreLoader from "../../components/preloader";
import "./main.css";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=iron`)
      .then((res) => res.json())
      .then(({ Search: data }) =>
        this.setState(() => ({
          movies: data,
          loading: false,
        }))
      );
    // .then(({ Search: data }) => this.setState({ movies: data }));
  }

  onSearchMovies = (search, type) => {
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${
        type !== "all" ? type : ""
      }`
    )
      .then((res) => res.json())
      .then(({ Search: data }) =>
        this.setState(() => ({ movies: data, loading: false }))
      );
    // .then(({ Search: data }) => this.setState({ movies: data }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <div className="container content">
        <Search onSearch={this.onSearchMovies} />
        {loading ? <PreLoader /> : <Movies movies={movies} />}
      </div>
    );
  }
}
