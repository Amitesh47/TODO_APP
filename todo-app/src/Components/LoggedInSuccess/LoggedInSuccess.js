import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import LoginTitle from "../LoginTitle/LoginTitle";
import TaskList from "../TaskList/TaskList";

const LoggedInSuccess = (props) => {
  const loginDetails = useSelector((state) => state.loginDetails);
  return (
    <React.Fragment>
      <Header buttonValue="Logout" href="/" />
      <LoginTitle phone={loginDetails.phone} />
      <TaskList />
    </React.Fragment>
  );
};

export default LoggedInSuccess;
