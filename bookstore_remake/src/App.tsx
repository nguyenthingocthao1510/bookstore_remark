import React from "react";
import "./App.css";
import ErrorBoundary from "./layouts/ErrorBoundary";
import AllRoutes from "./routes/Routes";

function App() {
  return (
    <div className="App h-full">
      <ErrorBoundary>
        <AllRoutes></AllRoutes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
