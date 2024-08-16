import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import PizzaMenu from "./components/PizzaMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <PizzaMenu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
