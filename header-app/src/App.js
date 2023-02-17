/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";

export const App = (props) => {
  return (
    <div>
      <div className="topnav">
        <a className="active" href="#">
          {props?.data}
        </a>
      </div>
    </div>
  );
};
export default App;
