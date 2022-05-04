import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <NavbarBrand href="/" style={{color: "#fff"}}>User Name</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-primary">Add User</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
