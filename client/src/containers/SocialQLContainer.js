import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import SocailQL from "../components/SocialQL";
import {
    runMarkedQueryfromSocialQL,
    starQuery,
    searchTag,
} from "../store/actions";
const mapStateToProps = (state) => {
    return {
        queryMark: state.firestore.ordered.userMarkedQuery,
        email: state.firebase.auth.email,
        auth: state.firebase.auth,
        developerId: state.firebase.auth.uid,
        searchTag: state.project.searchTag,
        queryMarkStore: state.project.queryMark,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runMarkedQueryfromSocialQL: (value) =>
            dispatch(runMarkedQueryfromSocialQL(value)),
        starQuery: (value, star, starList) =>
            dispatch(starQuery(value, star, starList)),
        searchTag: (value, queryMark) => dispatch(searchTag(value, queryMark)),
    };
};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "userMarkedQuery" }])
)(SocailQL);
