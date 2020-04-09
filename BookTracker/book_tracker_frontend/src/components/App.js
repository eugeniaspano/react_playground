import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);