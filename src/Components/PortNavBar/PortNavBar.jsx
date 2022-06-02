import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import pdf from '../../michael-starkman-resume.pdf';


const PortNavBar = () => {
    return (
        <>
            <div className="NavBar">
                <Navbar 
                bg="light" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="https://i.imgur.com/tkxn0sv.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                        Michael Starkman
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link 
                                href="#home">
                                Home
                            </Nav.Link>
                            <Nav.Link 
                                href="#link">
                                Portfolio
                            </Nav.Link>
                            <Nav.Link 
                                href="/about"
                                >About Me
                            </Nav.Link>
                            <Nav.Link 
                                href="#link">
                                Contact
                            </Nav.Link>  
                            {/* might make it into a button on home page */}
                            <Nav.Link 
                                href={pdf}  
                                target="_blank" 
                                rel="noreferrer">
                                Resume
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>    
    )
}
export default PortNavBar;