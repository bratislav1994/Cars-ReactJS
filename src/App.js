import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.getCars();
  }

  getCars() {
    fetch("http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Network request failed.");
        }
      })
      .then(results => {
        const cars = results.data;
        console.log(cars);
      });
  }
  render() {
    return <div />;
  }
}

export default App;
