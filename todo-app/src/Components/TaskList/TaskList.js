import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import FormContainer from "../FormContainer/FormContainer";
import FormBody from "../FormBody/FormBody";
import TaskModal from "../TaskModal/TaskModal";
import "./TaskList.css";

const TaskList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState();
  const userTasksDetails = useSelector((state) => state.userTasksDetails);
  const dispatch = useDispatch();

  const editHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const onChangeHandler = (event) => {
    setNewTaskValue(event.target.value);
    console.log("NEW_TASK", newTaskValue);
  };

  const saveTaskHandler = () => {
    userTasksDetails.taskList.map((eachTask, index) => {
      if (index === props.id) {
        setShowModal(false);
        dispatch({
          type: "EDIT_TASK",
          taskDetails: {
            userPhone: userTasksDetails.userPhone,
            prevTaskValue: eachTask,
            newTaskValue,
          },
        });
      }
      return null;
    });
  };

  const deleteHandler = () => {
    dispatch({
      type : "DELETE_TASK",
      taskDetails : {
        userPhone : userTasksDetails.userPhone,
        taskName : props.taskName
      }
    })
  };

  return (
    <React.Fragment>
      <div className="taskList">
        <FormContainer>
          <FormBody>
            <Row>
              <Col lg={4}>{props.taskName}</Col>
              <Col lg={{ span: 1, offset: 1 }}>
                <Button value="Edit" onClick={editHandler} />
              </Col>
              <Col lg={{ span: 2, offset: 1 }}>
                <Button value="Delete" onClick={deleteHandler} />
              </Col>
            </Row>
          </FormBody>
        </FormContainer>
      </div>
      {showModal && (
        <TaskModal
          showModal={showModal}
          closeModalHandler={closeModalHandler}
          modalTitle="Edit the Task"
          value="Edit"
          id={props.id}
          inputValue={props.taskName}
          onChangeHandler={onChangeHandler}
          saveTaskHandler={saveTaskHandler}
        />
      )}
    </React.Fragment>
  );
};

export default TaskList;
