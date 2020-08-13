import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "../../style/Sign.css";

function SignUp(props) {
    let signIn = {
        width: "800px",
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
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <span
                    className="inline-example border border-default rounded mb-0"
                    style={signIn}
                >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            {" "}
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
                            {" "}
                            <h1>First Name</h1>
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
                                id="firstName"
                                placeholder="FirstName"
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <h1>Last Name</h1>
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
                                id="lastName"
                                placeholder="LastName"
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            {" "}
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
                                type="password"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Group>
                    <div class="row justify-content-center">
                        <Button
                            variant="danger"
                            type="submit"
                            size="lg"
                            style={{ display: "block", align: "center" }}
                        >
                            SignUp
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

export default SignUp;
