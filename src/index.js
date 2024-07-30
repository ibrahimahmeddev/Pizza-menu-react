import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data.js";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src={pizzaData[0].photoName} alt="pizza focaccia" />
      <h2>Pizza data</h2>
      <h3>{pizzaData[0].name}</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
