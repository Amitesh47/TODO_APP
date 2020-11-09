import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../Button/Button";
import "./TaskModal.css";

const TaskModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.closeModalHandler}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="newTaskInput"
          type="text"
          placeholder={props.inputValue ? props.inputValue : "Enter a New Task"}
          onChange={(e) => props.onChangeHandler(e)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button value="Close" onClick={props.closeModalHandler} />
        <Button value={props.value} onClick={props.saveTaskHandler} />
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
