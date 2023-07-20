import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteAppA = React.lazy(() => import("RemoteA/App"));
//const RemoteButton = React.lazy(() => import("RemoteA/Button"));
const RemoteAppB = React.lazy(() => import("RemoteB/App"));
const RemoteAppC = React.lazy(() => import("RemoteC/App"));

const RemoteWrapper = ({ children }) => (
  <div style={{}}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <>
    <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
      <RemoteWrapper>
        <RemoteAppA data={"Dummy"} />
      </RemoteWrapper>
      <RemoteWrapper>
        <RemoteAppB data="" />
      </RemoteWrapper>
      <RemoteWrapper>
        <RemoteAppC />
      </RemoteWrapper>
    </div>
  </>
);
export default App;
