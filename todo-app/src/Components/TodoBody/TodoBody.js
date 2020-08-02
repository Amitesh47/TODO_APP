import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./TodoBody.css";

const TodoBody = (props) => {
  return (
    <div className="body">
      <Container>
        <Row>
          <Input placeholder="Enter your Number" type="number" />
        </Row>
        <Row>
          <Input placeholder="Enter your password" type="password" />
        </Row>
      </Container>
      <div className="registerButton">
        <Container>
          <Button value="Register" />
        </Container>
      </div>
    </div>
  );
};

export default TodoBody;
