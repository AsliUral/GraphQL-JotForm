import React from "react";
import SideBarMarkedQueryTab from "../components/SideBarMarkedQueryTab";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        queryMark: state.firestore.ordered.userMarkedQuery,
        email: state.firebase.auth.email,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "userMarkedQuery" }])
)(SideBarMarkedQueryTab);
