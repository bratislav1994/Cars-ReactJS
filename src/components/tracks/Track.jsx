import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  state = { showResults: false, first: false };

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

  getStyleForCar(track) {
    let style = {};

    if (track.isRaceStarted) {
      style = {
        width: "200px",
        height: "100px",
        border: "1px solid black",
        margin: "10px",
        animation: "move " + track.animationDuration + "s",
        animationDirection: "normal",
        animationFillMode: "forwards",
        animationTimingFunction:
          track.animationDuration < 3 ? "linear" : "ease-in",
        position: "relative"
      };
    } else {
      style = {
        width: "200px",
        height: "100px",
        border: "1px solid black",
        margin: "10px",
        position: "relative"
      };
    }
    return style;
  }

  render() {
    const { track } = this.props;
    const positionColor = this.getColorForRace(track.position);
    let style = this.getStyleForCar(track);

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
              style={style}
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
            {track.isRaceStarted ? track.position : ""}
          </p>
        </div>
      </div>
    );
  }
}

export default Track;
