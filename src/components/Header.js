import '../css/header.css'
import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    return (
        <div >
            <Nav variant="tabs" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" href="/contact">Contact</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Account" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Your Profile</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Your Credits</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Your projects</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Sign out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    );
}
export default Header;