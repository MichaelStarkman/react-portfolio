import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactMe = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <h3>I am open to work opportunities</h3>
            <Form>
                {/* Name */}
                {/* Phone */}
                {/* Email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {/* Subject */}
                {/* Message */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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