import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import FormContainer from "../FormContainer/FormContainer";
import FormBody from "../FormBody/FormBody";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <div className="taskList">
      <FormContainer>
        <FormBody>
          <Row>
            <Col lg={4}>{props.taskName}</Col>
            <Col lg={{ span: 1, offset: 1 }}>
              <Button value="Edit" />
            </Col>
            <Col lg={{ span: 2, offset: 1 }}>
              <Button value="Delete" />
            </Col>
          </Row>
        </FormBody>
      </FormContainer>
    </div>
  );
};

export default TaskList;
