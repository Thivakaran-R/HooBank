import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Head.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Head = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid className="space">
        <Navbar.Brand href="#home" className="hookimg">
          <img
            src="https://online-payment-react-website.vercel.app/assets/logo.efc6c435.svg"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="Home">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="link text-light">
              About Us
            </Nav.Link>
            <Nav.Link href="#features" className="link text-light">
              Features
            </Nav.Link>
            <Nav.Link href="#solution" className="link text-light">
              Solution
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Head;
