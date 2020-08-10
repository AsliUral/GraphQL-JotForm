import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import SocailQL from "../components/SocialQL";
import { runMarkedQueryfromSocialQL, starQuery } from "../store/actions";
const mapStateToProps = (state) => {
    return {
        queryMark: state.firestore.ordered.userMarkedQuery,
        email: state.firebase.auth.email,
        auth: state.firebase.auth,
        developerId: state.firebase.auth.uid,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runMarkedQueryfromSocialQL: (value) =>
            dispatch(runMarkedQueryfromSocialQL(value)),
        starQuery: (value, star, starList) =>
            dispatch(starQuery(value, star, starList)),
    };
};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "userMarkedQuery" }])
)(SocailQL);
