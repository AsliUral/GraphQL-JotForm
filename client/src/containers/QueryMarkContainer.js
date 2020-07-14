import React from "react";
import { connect } from "react-redux";
import QueryMark from "../components/QueryMark";
import {
    addMarkQuery,
    setTagQuery,
    setPostHeader,
    setOpenModal,
} from "../store/actions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        queryMark: state.firestore.ordered.userMarkedQuery,
        query: state.project.query,
        tags: state.project.tags,
        modal: state.project.modal,
        markedQueryPostHeader: state.project.markedQueryPostHeader,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMarkQuery: (query, header, tag) =>
            dispatch(addMarkQuery(query, header, tag)),
        setTagQuery: (value) => dispatch(setTagQuery(value)),
        setPostHeader: (value) => dispatch(setPostHeader(value)),
        setOpenModal: (value) => dispatch(setOpenModal(value)),
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "userMarkedQuery" }])
)(QueryMark);
