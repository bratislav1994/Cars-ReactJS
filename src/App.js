import React, { Component } from "react";
import "./App.css";
import Boxes from "./components/boxes/Boxes";

const numberOfCarsInRow = 3;

class App extends Component {
  state = {
    cars: [],
    requestFailed: false
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

  getCarsByRow() {
    const { cars } = this.state;
    const rows = [...Array(Math.ceil(cars.length / numberOfCarsInRow))];
    const carsByRow = rows.map((row, idx) =>
      cars.slice(
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
          <Boxes boxes={carsByRow} numberOfCarsInRow={numberOfCarsInRow} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
