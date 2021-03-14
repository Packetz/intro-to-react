import React from "react";
import "./App.css";
import SearchParams from "./components/SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./components/Details";

function App() {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/"> Adopt Me! </Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
