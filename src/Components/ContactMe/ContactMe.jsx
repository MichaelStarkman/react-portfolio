// DO NOT USE


import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

// TODO:
// update form
// validation
// UI that says it was successful

const ContactMe = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <h4>I am open to work opportunities</h4>
            <Form>
                {/* Name */}
                <FormGroup className="mb-3" controlId="formBasicName">
                    <FormLabel>Name</FormLabel>
                    <FormControl type="name" placeholder="Enter name" />
                </FormGroup>
                {/* Email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {/* Subject */}
                <FormGroup className="mb-3" controlId="formBasicSubject">
                    <FormLabel>Subject</FormLabel>
                    <FormControl type="subject" placeholder="Enter subject" />
                </FormGroup>
                {/* Message */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="message" placeholder="Message" />
                    
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" /> */}
                {/* </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactMe;