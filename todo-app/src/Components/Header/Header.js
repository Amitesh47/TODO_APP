import React from "react";
import {Container} from 'react-bootstrap';
import NavBar from '../NavBar/NavBar'
import './Header.css'

const Header = (props) => {
  return (
    <div className="navBar">
      <Container>
        <NavBar />
      </Container>
    </div>
  );
};

export default Header
