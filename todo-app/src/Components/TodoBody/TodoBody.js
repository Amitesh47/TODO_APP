import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Password from "../Password/Password";
import "./TodoBody.css";
import { NO_ERROR } from "../../Reducers/ErrorReducers/constants";

const TodoBody = (props) => {
  const [phError, setPhError] = useState("Error");
  const [passError, setPassError] = useState("Error");
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (error === "No Error") {
      props.registrationSubmit();
    }
  };

  const updatePhError = () => {
    setPhError("No Error");
  };

  const updatePassError = () => {
    setPassError("No Error");
  };

  if (phError === "No Error" && passError === "No Error") {
    dispatch({ type: NO_ERROR });
  }

  return (
    <div className="body">
      <form onSubmit={onSubmit}>
        <Container>
          <Row>
            <Input
              placeholder="Enter your Number"
              type="number"
              updateError={updatePhError}
            />
          </Row>
          <Row>
            <Password
              placeholder="Enter your password"
              minLength="8"
              updateError={updatePassError}
            />
          </Row>
        </Container>
        <Container>
          <div className="registerButton">
            <Button value="Register" type="submit" />
          </div>
        </Container>
      </form>
    </div>
  );
};

export default TodoBody;
