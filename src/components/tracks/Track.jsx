import React, { Component } from "react";

class Track extends Component {
  render() {
    const { track } = this.props;

    return (
      <div
        className="form-group"
        style={{
          border: "1px solid black",
          width: "100%"
        }}
      >
        <div>
          <img
            key={track.car.id}
            src={track.car.image}
            alt=""
            style={{
              width: "200px",
              height: "100px",
              border: "1px solid black",
              margin: "5px"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Track;
