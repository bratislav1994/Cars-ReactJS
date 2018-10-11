import React, { Component } from "react";

class Car extends Component {
  render() {
    const { car } = this.props;

    return (
      <div style={{ margin: "20px" }}>
        <div
          style={{
            width: "100%",
            border: "1px solid black"
          }}
        >
          <img
            key={car.id}
            src={car.image}
            alt=""
            style={{
              width: "300px",
              height: "150px"
              // border: "1px solid black",
            }}
          />

          <p>{car.name}</p>
        </div>
      </div>
    );
  }
}

export default Car;
