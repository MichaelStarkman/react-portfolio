import React from "react";

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const PortNavBar = () => {
    return (
        <>
            <div className="NavBar">
                <Navbar 
                bg="light" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Michael Starkman</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Portfolio</Nav.Link>
                            <Nav.Link href="#link">About Me</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>  
                            {/* might make it into a button on home page */}
                            <Nav.Link href="#link">Resume</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>    
    )
}
export default PortNavBar;