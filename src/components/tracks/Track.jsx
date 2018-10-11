import React, { Component } from "react";

class Track extends Component {
  getColorForRace(position) {
    let color = "";
    if (position === 1) {
      color = "#FFD700";
    } else if (position === 2) {
      color = "#B6B6B6";
    } else if (position === 3) {
      color = "#cd7f32";
    } else {
      color = "#000000";
    }

    return color;
  }

  render() {
    const { track } = this.props;
    const positionColor = this.getColorForRace(track.position);

    return (
      <div>
        <div
          style={{
            width: "90%",
            height: "100%",
            display: "inline-block"
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
                margin: "10px",
                border: "1px solid black",
                float: track.float
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: "10%",
            float: "right",
            display: "inline-block"
          }}
        >
          <p
            style={{
              float: "right",
              color: positionColor,
              fontSize: "30px"
            }}
          >
            {track.float === "right" ? track.position : ""}
          </p>
        </div>
      </div>
    );
  }
}

export default Track;
