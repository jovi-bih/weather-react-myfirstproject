import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Bih Jovi and is {""}
          <a
            href="https://github.com/jovi-bih/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
          {""} and {""}
          <a
            href="https://github.com/jovi-bih/react-weather-app"
            target="_blank"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
