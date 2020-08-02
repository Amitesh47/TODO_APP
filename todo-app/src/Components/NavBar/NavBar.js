import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "../Button/Button";


const NavBar = (props) => {
  return (
    <Row>
      <Col lg={{ offset: 10 }}>
        <Button value="Sign In" type="button"/>
      </Col>
    </Row>
  );
};

export default NavBar;
