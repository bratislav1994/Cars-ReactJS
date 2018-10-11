import React, { Component } from "react";

class Filter extends Component {
  state = { filter: "" };

  searchUpdate = term => {
    let filter = term.target.value;
    this.setState({ filter });
    this.props.onSearchUpdated(filter);
  };

  render() {
    return (
      <div style={{ marginBottom: "10px" }}>
        <input
          className="search-input"
          style={{ width: "100%", height: "30px" }}
          value={this.state.filter}
          type="text"
          placeholder="Search"
          onChange={this.searchUpdate}
        />
      </div>
    );
  }
}

export default Filter;
