import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteAppA = React.lazy(() => import("RemoteA/App"));
//const RemoteButton = React.lazy(() => import("RemoteA/Button"));
const RemoteAppB = React.lazy(() => import("RemoteB/App"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid rgba(43, 192, 219, 0.3)",
      background: "#f0f4f4",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
    <RemoteWrapper>
      <RemoteAppA data={"Module Federation MFE architecture"} />
    </RemoteWrapper>
    <RemoteWrapper>
      <RemoteAppB
        data="Module Federation gives us a new method of sharing code between
          frontend applications.It is not a Framework: Module Federation is a plugin that is added to
          Webpack. This gives you the freedom and flexibility to build your
          project the way you want It integrates components at Run-Time: You do
          not have to worry about deployments or dependencies of other
          microfrontends."
      />
    </RemoteWrapper>
  </div>
);
export default App;
