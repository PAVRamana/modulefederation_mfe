/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";

export const App = (props) => {
  return (
    <header>
      <svg
        class="footer-wave-svg1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          class="footer-wave-path1"
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
        ></path>
      </svg>
      <nav>
        <ul className="navbar">
          <li className="licls">
            <a href="#">{props?.data ? props?.data : "Home"}</a>
          </li>
          <li className="licls">
            <a href="#">About</a>
          </li>
          <li className="licls">
            <a href="#">Blog</a>
          </li>
          <li className="licls">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default App;
