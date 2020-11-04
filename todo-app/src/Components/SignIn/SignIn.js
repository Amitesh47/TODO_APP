import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form/Form";
import FormContainer from "../FormContainer/FormContainer";
import FormBody from "../FormBody/FormBody";
import Header from "../Header/Header";
import LoggedInSuccess from "../LoggedInSuccess/LoggedInSuccess";

const SignIn = (props) => {
  // const loginSuccessful = useSelector((state) => state.loginSuccess);
  const dispatch = useDispatch();
  const loginDetails = useSelector((state) => state.loginDetails);
  console.log("###LOGIN_DETAILS", loginDetails);

  const loginSubmit = (loginDetails) => {
    dispatch({
      type: "LOGIN",
      loginDetails,
    });
  };

  const renderSignInForm = () => {
    return (
      <React.Fragment>
        <Header buttonValue="Register" />
        <FormContainer>
          <FormBody>
            <Form submitButtonText="Sign In" formSubmit={loginSubmit} />
          </FormBody>
        </FormContainer>
        {loginDetails.loginStatus === "failed" ? <div>Login Failed</div> : null}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {loginDetails.loginStatus === "success" ? (
        <LoggedInSuccess />
      ) : (
        renderSignInForm()
      )}
    </React.Fragment>
  );
};

export default SignIn;
