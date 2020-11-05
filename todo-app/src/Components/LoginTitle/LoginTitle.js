import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import TaskModal from "../TaskModal/TaskModal";
import "./LoginTitle.css";

const LoginTitle = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState(null);
  const dispatch = useDispatch();

  const addNewTaskHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const saveTaskHandler = () => {
    const newTaskDetails = {
      userPhone: props.phone,
      taskCount: props.userTasksDetails.taskCount + 1,
      taskList: [
        ...props.userTasksDetails.taskList,
        { taskId: props.userTasksDetails.taskCount + 1, taskName: newTaskValue },
      ],
    };
    dispatch({
      type: "ADD_NEW_TASK",
      newTaskDetails,
    });
    setShowModal(false);
  };

  const onChangeHandler = (event) => {
    setNewTaskValue(event.target.value);
    console.log("####", newTaskValue);
  };

  return (
    <React.Fragment>
      <div className="loginDetails">
        <h3>
          Hello
          <h2 className="phoneNo"> {props.phone}.</h2>
          Welcome to the TODO dashboard{" "}
        </h3>
        <Button value="Add A New Task" onClick={addNewTaskHandler} />
      </div>
      {showModal && (
        <TaskModal
          showModal={showModal}
          closeModalHandler={closeModalHandler}
          saveTaskHandler={saveTaskHandler}
          onChangeHandler={onChangeHandler}
        />
      )}
    </React.Fragment>
  );
};

export default LoginTitle;
