import React from "react";
import { connect } from "react-redux";
import QueryMark from "../components/QueryMark";
import { addMarkQuery } from "../store/actions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        queryMark: state.firestore.ordered.userMarkedQuery,
        query: state.project.query,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMarkQuery: (value) => dispatch(addMarkQuery(value)),
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "userMarkedQuery" }])
)(QueryMark);
