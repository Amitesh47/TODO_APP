import React from "react";
import Button from "../Button/Button";
import "./LoginTitle.css";

const LoginTitle = (props) => {
  return (
    <div className="loginDetails">
      <h3>
        Hello
        <h2 className="phoneNo"> {props.phone}.</h2>
        Welcome to the TODO dashboard{" "}
      </h3>
      <Button value="Add A New Task" />
    </div>
  );
};

export default LoginTitle;
