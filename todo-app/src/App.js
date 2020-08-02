import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar/NavBar";
import TodoBody from "./Components/TodoBody/TodoBody";
import RegisteredSuccessfully from "./Components/RegisteredSuccessfully/RegisteredSuccessfully";
import "./App.css";

function App() {
  const [registrationSuccessful, setRegistrationSuccessfull] = useState(false);

  const registrationSubmit = () => {
    setRegistrationSuccessfull(true);
  };

  const renderComponent = registrationSuccessful ? (
    <RegisteredSuccessfully />
  ) : (
    <TodoBody registrationSubmit={registrationSubmit} />
  );

  return (
    <React.Fragment>
      <div className="navBar">
        <Container>
          <NavBar />
        </Container>
      </div>
      <div className="todoBody">
        <div className="flex">
          <Container>{renderComponent}</Container>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
