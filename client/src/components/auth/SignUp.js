import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

function SignUp(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        let signUp = {
            email: props.email,
            password: props.password,
            firstName: props.firstName,
            lastName: props.lastName,
        };
        props.signUp(signUp);
    };
    const handleChange = (event) => {
        if (event.target.id === "password") {
            props.setSignPasswordValue(event.target.value);
        } else if (event.target.id === "email") {
            props.setSignEmailValue(event.target.value);
        } else if (event.target.id === "firstName") {
            props.setSignFirstNameValue(event.target.value);
        } else if (event.target.id === "lastName") {
            props.setSignLastNameValue(event.target.value);
        }
    };

    const { auth, authError } = props;
    if (props.auth.uid) return <Redirect to="/" />;
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    id="firstName"
                    placeholder="FirstName"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    id="lastName"
                    placeholder="lastName"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
                SignUp
            </Button>
            <div className="red-text center">
                {authError ? <p> {authError}</p> : null}
            </div>
        </Form>
    );
}

export default SignUp;
