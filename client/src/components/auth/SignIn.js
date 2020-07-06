import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "../../style/Sign.css";
function SignIn(props) {
    let signIn = {
        width: "700px",
        margin: "auto",
        display: "block",
        align: "center",
    };

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
        <div>
            <Form onSubmit={handleSubmit}>
                <span
                    className="block-example border border-danger rounded mb-0"
                    style={signIn}
                >
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
                    <Button
                        variant="danger"
                        type="submit"
                        style={{ display: "block", align: "center" }}
                    >
                        Login
                    </Button>
                    <div className="red-text center">
                        {authError ? <p> {authError}</p> : null}
                    </div>
                </span>
            </Form>
        </div>
    );
}

export default SignIn;
