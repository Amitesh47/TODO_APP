import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";

const RegisteredSuccessfully = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "USER_EXISTS",
      value: false,
    });
  });

  const onClickHandler = () => {
    dispatch({
      type: "RESET_REGISTRATION",
    });
  };

  return (
    <React.Fragment>
      <FormContainer>
        <Container>
          <div>Registered Successfully!! You may Sign In now to continue</div>
          <div>
            Click{" "}
            <a href="/" onClick={onClickHandler}>
              here
            </a>{" "}
            to register again
          </div>
        </Container>
      </FormContainer>
    </React.Fragment>
  );
};

export default RegisteredSuccessfully;
