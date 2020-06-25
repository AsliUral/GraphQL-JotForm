import React from "react";
import { connect } from "react-redux";
import SignUp from "../components/auth/SignUp";
import {
    signUp,
    setSignEmailValue,
    setSignPasswordValue,
    setSignFirstNameValue,
    setSignLastNameValue,
} from "../store/authActions";

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        email: state.auth.email,
        password: state.auth.password,
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
        setSignEmailValue: (email) => dispatch(setSignEmailValue(email)),
        setSignPasswordValue: (password) =>
            dispatch(setSignPasswordValue(password)),
        setSignFirstNameValue: (firstName) =>
            dispatch(setSignFirstNameValue(firstName)),
        setSignLastNameValue: (lastName) =>
            dispatch(setSignLastNameValue(lastName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
