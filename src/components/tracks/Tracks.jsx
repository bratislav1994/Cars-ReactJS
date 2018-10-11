import React, { Component } from "react";
import Track from "./Track";

class Tracks extends Component {
  render() {
    const { tracks } = this.props;
    if (tracks.length === 0) return <div />;

    return (
      <div>
        {tracks.map((track, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "120px"
            }}
          >
            <Track key={track.id} track={track} />
          </div>
        ))}
        <br />
      </div>
    );
  }
}

export default Tracks;
