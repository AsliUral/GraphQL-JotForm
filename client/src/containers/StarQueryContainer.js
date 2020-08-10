import React from "react";
import { connect } from "react-redux";
import StarQuery from "../components/StarQuery";
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarQuery);
