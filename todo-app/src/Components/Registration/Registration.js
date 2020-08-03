import React from "react";
import Form from "../Form/Form";
import FormBody from "../FormBody/FormBody";

const Registration = (props) => {
  return (
    <FormBody>
      <Form submitButtonText="Register" formSubmit={props.formSubmit}/>
    </FormBody>
  );
};

export default Registration;
