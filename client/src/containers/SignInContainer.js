import React from "react";
import { connect } from "react-redux";
import SignIn from "../components/auth/SignIn";
import {
    signIn,
    setSignEmailValue,
    setSignPasswordValue,
} from "../store/authActions";

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        email: state.auth.email,
        password: state.auth.password,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        setSignEmailValue: (email) => dispatch(setSignEmailValue(email)),
        setSignPasswordValue: (password) =>
            dispatch(setSignPasswordValue(password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
