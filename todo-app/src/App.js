import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Routes from "./Routes/routes";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
  );
}

export default App;
