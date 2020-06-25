import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import SocailQL from "../components/SocialQL";

const mapStateToProps = (state) => {
    return {
        queryMark: state.firestore.ordered.userMarkedQuery,
        email: state.firebase.auth.email,
    };
};

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([{ collection: "userMarkedQuery" }])
)(SocailQL);
