import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import FormContainer from "../FormContainer/FormContainer";
import FormBody from "../FormBody/FormBody";
import "./TaskList.css"

const TaskList = (props) => {
  return (
    <div className="taskList">
      <FormContainer>
        <FormBody>
          <Container>
            <Row>
              <Col lg={8}>Here is the task. You wanna see, then see bitch</Col>
              <Col lg={2}>
                <Button value="Edit" />
              </Col>
              <Col lg={2}>
                <Button value="Delete" />
              </Col>
            </Row>
          </Container>
        </FormBody>
      </FormContainer>
    </div>
  );
};

export default TaskList
