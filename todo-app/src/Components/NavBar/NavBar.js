import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import history from "../../Routes/history";

const NavBar = (props) => {
  const onClickHandler = () => {
    return history.push("/SignIn");
  };

  return (
    <Row>
      <Col lg={{ offset: 10 }}>
        <Button value="Sign In" type="submit" onClick={() => onClickHandler()} />
      </Col>
    </Row>
  );
};

export default NavBar;
