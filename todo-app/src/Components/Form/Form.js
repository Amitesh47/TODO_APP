import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { NO_ERROR } from "../../Reducers/ErrorReducers/constants";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Password from "../Password/Password";
import "./Form.css";

const Form = (props) => {
  const [phError, setPhError] = useState(true);
  const [passError, setPassError] = useState(true);
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      phone: parseInt(phone),
      password,
    };
    if (error === "No Error") {
      props.formSubmit(userDetails);
    }
  };

  const updatePhError = (value) => {
    setPhone(value);
    setPhError(false);
  };

  const updatePassError = (value) => {
    setPassword(value);
    setPassError(false);
  };

  if (!phError && !passError) {
    dispatch({ type: NO_ERROR });
  }

  return (
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
        <div className="button">
          <Button value={props.submitButtonText} type="submit" />
        </div>
      </Container>
    </form>
  );
};

export default Form;
