import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

export default function HomePage(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/users">Users</Link>
      </header>
    </div>
  );
}
