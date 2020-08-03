import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import RegisteredSuccessfully from "../RegisteredSuccessfully/RegisteredSuccessfully";
import Registration from "../Registration/Registration";
import FormContainer from "../FormContainer/FormContainer";
import { SUCCESS } from "../../Reducers/RegistrationReducers/constants";

const Home = (props) => {
  const registrationSuccessful = useSelector(
    (state) => state.registrationSuccess
  );
  const dispatch = useDispatch();

  const registrationSubmit = () => {
    dispatch({
      type: SUCCESS,
    });
  };

  const renderComponent = registrationSuccessful ? (
    <RegisteredSuccessfully />
  ) : (
    <Registration formSubmit={registrationSubmit} />
  );

  return (
    <FormContainer>
      <Container>{renderComponent}</Container>
    </FormContainer>
  );
};

export default Home;
