// DO NOT USE! 


import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import pdf from '../../michael-starkman-resume.pdf';


const PortNavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    
    return (
        <>
            <div className="NavBar">
                <Navbar 
                bg="light" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand to="hero">
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
                                to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home
                            </Nav.Link>
                            <Nav.Link 
                                className="link" to="portfolio" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link 
                                href="/About"
                                >About Me
                            </Nav.Link>
                            <Nav.Link 
                                href="/Contact">
                                Contact
                            </Nav.Link>  
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