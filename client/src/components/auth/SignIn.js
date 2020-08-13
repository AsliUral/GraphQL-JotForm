import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "../../style/Sign.css";
function SignIn(props) {
    let signIn = {
        width: "800px",
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
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <span
                    className="inline-example border border-default rounded mb-0"
                    style={signIn}
                >
                    <Form.Group>
                        <Form.Label>
                            <h1>Email address</h1>
                        </Form.Label>
                        <div
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <Form.Control
                                style={{
                                    width: "500px",
                                    display: "inline-block ",
                                }}
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <h1>Password</h1>
                        </Form.Label>
                        <div
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <Form.Control
                                style={{
                                    width: "500px",
                                    display: "inline-block ",
                                }}
                                id="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div class="row justify-content-center">
                        <Button
                            variant="danger"
                            type="submit"
                            size="lg"
                            style={{ display: "block", align: "center" }}
                        >
                            Login
                        </Button>
                    </div>
                    <div className="red-text center">
                        {authError ? <p> {authError}</p> : null}
                    </div>
                </span>
            </Form>
        </div>
    );
}

export default SignIn;
