import React, { Component } from "react";
import "./App.css";
import Boxes from "./components/boxes/Boxes";
import Filter from "./components/filter/Filter";

const numberOfCarsInRow = 3;

class App extends Component {
  state = {
    cars: [],
    requestFailed: false,
    filter: ""
  };

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
      .then(
        results => {
          const cars = results.data;
          this.setState({ cars });
          // console.log(cars);
        },
        () => {
          this.setState({ requestFailed: true });
        }
      );
  }

  handleSearchUpdate = term => {
    this.setState({ filter: term });
  };

  getSearchedCars() {
    const { cars, filter } = this.state;
    let searchedCars = cars.filter(c => {
      return c.name.indexOf(filter) !== -1;
    });

    return searchedCars;
  }

  getCarsByRow() {
    const searchedCars = this.getSearchedCars();
    const rows = [...Array(Math.ceil(searchedCars.length / numberOfCarsInRow))];
    const carsByRow = rows.map((row, idx) =>
      searchedCars.slice(
        idx * numberOfCarsInRow,
        idx * numberOfCarsInRow + numberOfCarsInRow
      )
    );

    return carsByRow;
  }

  render() {
    const { cars, requestFailed } = this.state;
    if (requestFailed) return <p>Failed</p>;
    if (cars.length === 0) return <p>Loading</p>;

    const carsByRow = this.getCarsByRow();

    return (
      <React.Fragment>
        <div>
          <Filter onSearchUpdated={this.handleSearchUpdate} />
          <Boxes boxes={carsByRow} numberOfCarsInRow={numberOfCarsInRow} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
