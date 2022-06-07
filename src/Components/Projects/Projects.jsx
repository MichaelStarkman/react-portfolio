import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

import './Projects.css'

// TODO: Add animation to project photos in desktop view
// TODO: Update images to show it is mobile responsive with images on phones, tablets, and desktop for each project

const Projects = () => {
    return (
        <div className="projects-container" id='portfolio'>
            <h1 className="project-title">Projects</h1>
            <hr />
            {/* Let's Dish! */}
            <div className="project-card-container">
                <div className="project-container">
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="https://i.imgur.com/9rgRB7q.png" />
                        <Card.Body>
                            <Card.Title>Let's Dish</Card.Title>
                            <Card.Text className="card-text">
                            Full-stack MERN (MongoDB, Express, REACT, and Node.js) application allowing users to create, edit and delete their favorites dishes found at local eateries.
                            </Card.Text>
                            <div className="card-button-container">
                                <Button href="https://lets-dish-react-frontend.herokuapp.com/" target="_blank" variant="success">Live Demo</Button>
                                <Button href="https://github.com/MichaelStarkman/lets-dish-react-frontend" target="_blank" variant="warning">GitHub</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                {/* Ticket Trader */}
                <div className="project-container">
                    <Card style={{ width: '100%' }}>
                        
                        <Card.Img variant="top" src="https://i.imgur.com/s1wmha2.png" />
                        <Card.Body>
                            <Card.Title>Ticket Trader</Card.Title>
                            <Card.Text>
                            React front-end that consumes a Django API allowing users to create, read, update, and delete tickets available to local events. 
                            </Card.Text>
                            <br />
                            <div className="card-button-container">
                                <Button href="https://ticket-trader.herokuapp.com/" target="_blank" variant="success">Live Demo</Button>
                                <Button href="https://github.com/MichaelStarkman/ticket-trader-front-end" target="_blank" variant="warning">GitHub</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                {/* Rosie's Travel App */}
                <div className="project-container">
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="https://i.imgur.com/arXW8Jl.png" />
                        <Card.Body>
                            <Card.Title>Rosie's Travel App</Card.Title>
                            <Card.Text>
                            Full-stack CRUD travel application built using Node.js, Mongoose, Express, EJS with RESTful routes allowing users to login with encrypted passwords. 
                            </Card.Text>
                            <div className="card-button-container">
                                <Button target="_blank" href="https://rosies-travel-tracker-app.herokuapp.com/trips" variant="success">Live Demo</Button>
                                <Button target="_blank" href="https://github.com/MichaelStarkman/unit-2-project" variant="warning">GitHub</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    ) 
}

export default Projects;