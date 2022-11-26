import '../css/header.css'
import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Header() {
    
    return (
        <div >
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <NavDropdown title="Account" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">Your profile</NavDropdown.Item>
                                <NavDropdown.Item href="#">Your projects</NavDropdown.Item>
                                <NavDropdown.Item href="#">Your credits</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Log out </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header;