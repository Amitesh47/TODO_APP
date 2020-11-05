import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import LoginTitle from "../LoginTitle/LoginTitle";
import TaskList from "../TaskList/TaskList";

const LoggedInSuccess = (props) => {
  const loginDetails = useSelector((state) => state.loginDetails);
  const userTasksDetails = useSelector((state) => state.userTasksDetails);

  return (
    <React.Fragment>
      <Header buttonValue="Logout" href="/" />
      <LoginTitle
        phone={loginDetails.phone}
        userTasksDetails={userTasksDetails}
      />
      {userTasksDetails.taskCount > 0 &&
        userTasksDetails.taskList.map((eachTask) => {
          return (
            <TaskList key={eachTask.taskId} taskName={eachTask.taskName} />
          );
        })}
    </React.Fragment>
  );
};

export default LoggedInSuccess;
