import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          {" "}
          <a
            className="App-link"
            href="https://github.com/Iryna1V/react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coded by Iryna Haievska 
          </a>
        </footer>
      </div>
    </div>
  );
}