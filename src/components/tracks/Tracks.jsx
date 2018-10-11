import React, { Component } from "react";
import Track from "./Track";

class Tracks extends Component {
  render() {
    const { tracks, onStart } = this.props;
    if (tracks.length === 0) return <div />;

    return (
      <div>
        {tracks.map((track, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              display: "inline-block",
              border: "1px solid black",
              marginBottom: "1px",
              height: "120px"
            }}
          >
            <Track key={track.id} track={track} />
          </div>
        ))}
        <br />
        <button
          style={{
            float: "right",
            width: "200px",
            height: "50px",
            marginTop: "10px"
          }}
          onClick={onStart}
        >
          START
        </button>
        <br />
      </div>
    );
  }
}

export default Tracks;
