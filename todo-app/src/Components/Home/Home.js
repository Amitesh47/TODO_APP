import React from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Registration from "../Registration/Registration";
import FormContainer from "../FormContainer/FormContainer";
import Header from "../Header/Header";
import RegisteredSuccessfully from "../RegisteredSuccessfully/RegisteredSuccessfully";
import "./Home.css";

const Home = (props) => {
  const userExists = useSelector((state) => state.userAlreadyExists);
  const registeredSuccessfully = useSelector(
    (state) => state.registrationSuccess
  );
  const dispatch = useDispatch();

  const registrationSubmit = (userDetails) => {
    dispatch({
      type: "REGISTER_USER",
      userDetails,
    });
  };

  const userAlreadyExistContainer = (
    <FormContainer>
      <div className="userExist">User already exists with the given number</div>
    </FormContainer>
  );

  return (
    <React.Fragment>
      <Header buttonValue="SignIn" />
      <FormContainer>
        <Container>
          {registeredSuccessfully ? (
            <RegisteredSuccessfully />
          ) : (
            <Registration formSubmit={registrationSubmit} />
          )}
        </Container>
      </FormContainer>
      {userExists ? userAlreadyExistContainer : ""}
    </React.Fragment>
  );
};

export default Home;
