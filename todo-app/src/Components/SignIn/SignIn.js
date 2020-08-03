import React from "react";
import { useDispatch} from "react-redux";
import Form from "../Form/Form";
import { SUCCESS } from "../../Reducers/LoginReducers/constants";
import FormContainer from "../FormContainer/FormContainer";
import FormBody from "../FormBody/FormBody";

const SignIn = (props) => {
  // const loginSuccessful = useSelector((state) => state.loginSuccess);
  const dispatch = useDispatch();

  const loginSubmit = () => {
    dispatch({
      type: SUCCESS,
    });
  };

  return (
    <FormContainer>
      <FormBody>
        <Form submitButtonText="Sign In" formSubmit={loginSubmit}/>
      </FormBody>
    </FormContainer>
  );
};

export default SignIn;
