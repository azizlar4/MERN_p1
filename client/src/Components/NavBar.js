import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../JS/Actions/user";

const NavBar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">users</Nav.Link>
            <Nav.Link href="/add">add</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {isAuth ? (
              <Link to="/register" onClick={() => dispatch(logout())}>
                <Button>logout</Button>
              </Link>
            ) : (
              <>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
              </>
            )}
            {isAuth ? <Link to="/profile">profile</Link> : null}
  
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
