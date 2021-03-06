import React from "react";
import {useDispatch} from 'react-redux'
import { Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import history from "../../Routes/history";

const NavBar = (props) => {
  const dispatch = useDispatch()

  const onClickHandler = () => {
    if(props.buttonValue === 'SignIn'){
      dispatch({
        type: "USER_EXISTS",
        value: false
      })
    }
    else if(props.buttonValue === 'Logout'){
      dispatch({
        type: "LOGOUT"
      })
    }
    return window.location.pathname === "/"
      ? history.push("/SignIn")
      : history.push("/");
  };

  return (
    <Row>
      <Col lg={{ offset: 10 }}>
        <Button
          value={props.buttonValue}
          type="submit"
          onClick={() => onClickHandler()}
          href={props.href}
        />
      </Col>
    </Row>
  );
};

export default NavBar;
