import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <Row>
      <Col lg={{ offset: 10 }}>
        <Button value="Sign In" />
      </Col>
    </Row>
  );
};

export default NavBar;
