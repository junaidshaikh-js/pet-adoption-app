import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
