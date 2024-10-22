import React from "react";
import { Link } from 'react-router-dom';
import {Navbar , Nav , Container , Button} from 'react-bootstrap';
import { LogoutOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import './cssfile/nav.css'


const CustomNavbar = () => {
    // const history = useHistory();

    const handaleLogout = () =>{
        // history.push('/logout');
    };

    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/conversations">
            <MessageOutlined /> ChatApp
          </Navbar.Brand>
  
          {/* Toggler for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          {/* Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* Conversation Link */}
              <Nav.Link as={Link} to="/conversations">
                Conversations
              </Nav.Link>
  
              {/* Profile Link */}
              <Nav.Link as={Link} to="/profile">
                <UserOutlined /> Profile
              </Nav.Link>
  
              {/* Logout Button */}
              <Button
                variant="outline-light"
                onClick={handaleLogout}
                className="d-flex align-items-center"
              >
                <LogoutOutlined /> Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default CustomNavbar