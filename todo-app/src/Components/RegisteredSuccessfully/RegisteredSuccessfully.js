import React from "react";
import Header from "../Header/Header";
import { Container } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";

const RegisteredSuccessfully = (props) => {
  return (
    <React.Fragment>
      <Header buttonValue="SignIn" />
      <FormContainer>
        <Container>
          <div>Registered Successfully!! You may Sign In now to continue</div>
          <div>
            Click <a href="/">here</a> to register again
          </div>
        </Container>
      </FormContainer>
    </React.Fragment>
  );
};

export default RegisteredSuccessfully;
