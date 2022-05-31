import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

import './Projects.css'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// TODO: Add animation to project photos in desktop view

const Projects = () => {
    return (
        <section className="projects-container">
            <h1>Projects</h1>
            {/* Let's Dish! */}
            <div className="project-one-container">
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://i.imgur.com/9rgRB7q.png" />
                    <Card.Body>
                        <Card.Title>Let's Dish</Card.Title>
                        <Card.Text>
                        Full-stack MERN (MongoDB, Express, REACT, and Node.js) application allowing users to create, edit and delete their favorites dishes found at local eateries.
                        </Card.Text>
                        <Button href="https://github.com/MichaelStarkman/lets-dish-react-frontend" target="_blank" variant="outline-primary">GitHub</Button>
                        <Button href="https://lets-dish-react-frontend.herokuapp.com/" target="_blank" variant="outline-primary">Live Demo</Button>
                    </Card.Body>
                </Card>
            </div>
            <br />
            {/* Ticket Trader */}
            <div className="project-two-container">
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://i.imgur.com/s1wmha2.png" />
                    <Card.Body>
                        <Card.Title>Ticket Trader</Card.Title>
                        <Card.Text>
                        React front-end that consumes a Django API allowing users to create, read, update, and delete tickets available to local events. 
                        </Card.Text>
                        <Button href="https://github.com/MichaelStarkman/ticket-trader-front-end" target="_blank" variant="outline-primary">GitHub</Button>
                        <Button href="https://ticket-trader.herokuapp.com/" target="_blank" variant="outline-primary">Live Demo</Button>
                    </Card.Body>
                </Card>
            </div>
            <br />
            {/* Rosie's Travel App */}
            <div className="project-three-container">
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://i.imgur.com/arXW8Jl.png" />
                    <Card.Body>
                        <Card.Title>Rosie's Travel App</Card.Title>
                        <Card.Text>
                        Full-stack CRUD travel application built using Node.js, Mongoose, Express, EJS with RESTful routes allowing users to login with encrypted passwords. 
                        </Card.Text>
                        <Button target="_blank" href="https://github.com/MichaelStarkman/unit-2-project" variant="outline-primary">GitHub</Button>
                        <Button target="_blank" href="https://rosies-travel-tracker-app.herokuapp.com/trips" variant="outline-primary">Live Demo</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* Rosie's Travel App */}
            {/* <div className="project-four-container">
            <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://i.imgur.com/9rgRB7q.png" />
                    <Card.Body>
                        <Card.Title>Project 4</Card.Title>
                        <Card.Text>
                        Full-stack MERN (MongoDB, Express, REACT, and Node.js) application allowing users to create, edit and delete their favorites dishes at local eateries.
                        </Card.Text>
                        <Button variant="primary">GitHub</Button>
                        <Button variant="primary">Live Demo</Button>
                    </Card.Body>
                </Card> */}
            {/* </div> */}
        </section>
    ) 
}

export default Projects;