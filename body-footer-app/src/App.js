import React from "react";
import "./App.css";

export const App = (props) => {
  return (
    <>
      <div style={{ height: "500px", background: "#f0f4f4" }}>
        <div style={{ paddingLeft: "16px" }}>
          <p style={{ lineHeight: "30px" }}>{props?.data}</p>
        </div>
      </div>
      <footer class="site-footer">
        <div>
          While Module Federation enables faster builds by vertically slicing
          your application into smaller ones, the MFE architecture layers
          independent deployments on top of federation. Teams should only choose
          MFEs if they want to deploy their host and remotes on different
          cadences.
        </div>
      </footer>
    </>
  );
};
export default App;
