import React from 'react';
// import { useState } from "react";
import { 
    Container,
    Navbar
} from 'react-bootstrap';

const PortFooterBar = () => {
    return (
        <>
            <div>
                <Navbar 
                className="footer-bar" 
                bg="light" 
                variant="light"
                >
                    <Container>
                        <Navbar.Text>
                            © Michael Starkman 2022
                        </Navbar.Text>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default PortFooterBar;