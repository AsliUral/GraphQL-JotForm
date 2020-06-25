import React from "react";
import { connect } from "react-redux";
import SignedInLinks from "../components/layout/SignedInLinks";
import { signOut } from "../store/authActions";

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
