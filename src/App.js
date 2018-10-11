import React, { Component } from "react";
import "./App.css";
import Boxes from "./components/boxes/Boxes";
import Filter from "./components/filter/Filter";
import Tracks from "./components/tracks/Tracks";

const numberOfCarsInRow = 3;

class App extends Component {
  state = {
    cars: [],
    requestFailed: false,
    filter: "",
    tracks: []
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

  handleSelect = car => {
    const tracks = [...this.state.tracks];
    tracks.push({ car });
    tracks.map(t => (t.float = "left"));
    this.setState({ tracks });
  };

  handleDeselect = car => {
    const tracks = [...this.state.tracks];
    let trackToDelete = tracks.find(t => t.car.id === car.id);
    let index = tracks.indexOf(trackToDelete);
    tracks.splice(index, 1);
    this.setState({ tracks });
  };

  handleStart = () => {
    const tracks = [...this.state.tracks];
    tracks.map(t => (t.float = "right"));
    let sortedCarsById = [];

    for (let i = 0; i < tracks.length; i++) {
      sortedCarsById.push({ id: tracks[i].car.id, speed: tracks[i].car.speed });
    }

    sortedCarsById.sort((t1, t2) => t2.speed - t1.speed);

    sortedCarsById.map((car, index) => {
      for (let i = 0; i < tracks.length; i++) {
        if (car.id === tracks[i].car.id) {
          tracks[i].position = index + 1;
          break;
        }
      }
      return car;
    });
    this.setState({ tracks });
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
          <Boxes
            boxes={carsByRow}
            numberOfCarsInRow={numberOfCarsInRow}
            onSelect={this.handleSelect}
            onDeselect={this.handleDeselect}
          />
          <Tracks tracks={this.state.tracks} onStart={this.handleStart} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
