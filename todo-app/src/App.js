import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar/NavBar";
import TodoBody from "./Components/TodoBody/TodoBody";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="navBar">
        <Container>
          <NavBar />
        </Container>
      </div>
      <div className="todoBody">
        <div className = "flex">
          <Container>
            <TodoBody />
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
