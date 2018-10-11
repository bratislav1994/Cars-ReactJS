import React, { Component } from "react";
import "./Car.css";

class Car extends Component {
  state = {
    imageBackgroundColor: "transparent",
    isChecked: false,
    isMouseOver: false
  };

  onMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  onMouseLeave = () => {
    this.setState({ isMouseOver: false });
  };

  selectCar = () => {
    let newColor;
    let isChecked;

    if (this.state.imageBackgroundColor === "transparent") {
      newColor = "#999";
      isChecked = true;
    } else {
      newColor = "transparent";
      isChecked = false;
    }

    this.setState({ imageBackgroundColor: newColor, isChecked });
  };

  render() {
    const { car } = this.props;

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
              onClick={this.selectCar}
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
                      backgroundColor: this.state.imageBackgroundColor
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
                      backgroundColor: this.state.imageBackgroundColor
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
                checked={this.state.isChecked}
                onChange={this.selectCar}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
