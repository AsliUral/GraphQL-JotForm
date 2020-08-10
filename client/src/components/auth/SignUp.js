import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "../../style/Sign.css";

function SignUp(props) {
    let signIn = {
        width: "700px",
        margin: "auto",
        display: "block",
        align: "center",
    };
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
    if (props.auth.uid) return <Redirect to="/socialQl" />;
    return (
        <Form onSubmit={handleSubmit}>
            <span
                className="block-example border border-danger rounded mb-0"
                style={signIn}
            >
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
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        id="lastName"
                        placeholder="LastName"
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
                <div class="row justify-content-center">
                    <Button variant="danger" type="submit">
                        SignUp
                    </Button>
                </div>
                <div className="red-text center">
                    {authError ? <p> {authError}</p> : null}
                </div>
            </span>
        </Form>
    );
}

export default SignUp;
