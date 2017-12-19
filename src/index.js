import React from "react";
import { render } from "react-dom";
import Player from "./demo";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h1>VoiceTube</h1>
    <div style={{padding: 10}}>Control the video with your voice alone</div>
    <Player name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById("root"));
