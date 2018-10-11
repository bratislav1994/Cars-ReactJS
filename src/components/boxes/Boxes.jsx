import React, { Component } from "react";
import Car from "./Car";
import "./Box.css";

class Boxes extends Component {
  getContent = () => {
    const { boxes, numberOfCarsInRow, onSelection } = this.props;
    const boxWidth = Math.floor(100 / numberOfCarsInRow) + "%";

    const content = boxes.map((row, idx) => (
      <div className="box-in-row" key={idx}>
        {row.map((car, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              width: boxWidth
            }}
          >
            <Car key={car.id} car={car} onSelection={onSelection} />
          </div>
        ))}
      </div>
    ));

    return content;
  };

  render() {
    return <div>{this.getContent()}</div>;
  }
}

export default Boxes;
