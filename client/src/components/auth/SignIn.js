import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

function SignIn(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        let signIn = {
            email: props.email,
            password: props.password,
        };
        props.signIn(signIn);
    };
    const handleChange = (event) => {
        if (event.target.id === "password") {
            props.setSignPasswordValue(event.target.value);
        } else if (event.target.id === "email") {
            props.setSignEmailValue(event.target.value);
        }
    };
    const { authError, auth } = props;
    if (props.auth.uid) return <Redirect to="/" />;
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
                Login
            </Button>
            <div className="red-text center">
                {authError ? <p> {authError}</p> : null}
            </div>
        </Form>
    );
}

export default SignIn;
