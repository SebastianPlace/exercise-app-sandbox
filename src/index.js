import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <p>{multiply(2, 6)}</p>
  </div>
);

export const multiply = (a, b) => {
  return a * b;
};

render(<App />, document.getElementById("root"));
