import React from "react";
import "./FormContainer.css";

const FormContainer = (props) => {
  return (
    <div className="containerForm">
      <div className="flex">{props.children}</div>
    </div>
  );
};

export default FormContainer
