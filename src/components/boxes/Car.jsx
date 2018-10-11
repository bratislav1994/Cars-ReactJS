import React, { Component } from "react";
import "./Car.css";

class Car extends Component {
  state = {
    isMouseOver: false
  };

  onMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  onMouseLeave = () => {
    this.setState({ isMouseOver: false });
  };

  selectionCar = () => {
    this.props.onSelection(this.props.car);
  };

  render() {
    const { car } = this.props;
    const color = car.isSelected ? "#999" : "transparent";

    return (
      <div>
        <div style={{ margin: "20px" }}>
          <div
            style={{
              width: "100%",
              border: "1px solid black"
            }}
          >
            <div
              onMouseOver={() => this.onMouseOver()}
              onMouseLeave={() => this.onMouseLeave()}
              onClick={this.selectionCar}
              className="flip-box"
            >
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img
                    key={car.id}
                    src={car.image}
                    alt=""
                    style={{
                      width: "300px",
                      height: "150px",
                      backgroundColor: color
                    }}
                  />
                </div>
                <div className="flip-box-back">
                  <img
                    key={car.id}
                    className="span-img"
                    src={car.image}
                    alt=""
                    style={{
                      width: "300px",
                      height: "150px",
                      backgroundColor: color
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              {this.state.isMouseOver ? (
                <div>
                  <p>Speed: {car.speed} Km/h</p>
                </div>
              ) : (
                <p>{car.name}</p>
              )}
              <input
                type="checkbox"
                checked={car.isSelected}
                onChange={this.selectionCar}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
