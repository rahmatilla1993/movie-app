import React from "react";
import "./search.css";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  onChangeHandler = ({ target }) => {
    this.setState({ search: target.value });
  };

  onChecked = ({ target }) => {
    const { search } = this.state;
    this.setState(
      () => ({ type: target.dataset.type }),
      () => this.props.onSearch(search, this.state.type)
    );
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { search, type } = this.state;
    this.props.onSearch(search, type);
  };

  render() {
    return (
      <div className="row">
        <form action="" className="search-form" onSubmit={this.onSubmitHandler}>
          <div className="input-field">
            <input
              type="search"
              className="validate"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.onChangeHandler}
            />
            <button type="submit" className="btn search-btn">
              Send
            </button>
          </div>
          <label>
            <input
              type="radio"
              data-type="all"
              className="with-gap"
              name="type"
              onChange={this.onChecked}
            />
            <span>All</span>
          </label>
          <label>
            <input
              type="radio"
              data-type="movie"
              className="with-gap"
              name="type"
              onChange={this.onChecked}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              type="radio"
              data-type="series"
              className="with-gap"
              name="type"
              onChange={this.onChecked}
            />
            <span>Series</span>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
