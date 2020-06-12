import React from "react";
import { connect } from "react-redux";
import QueryData from "../components/QueryData";
import * as actionTypes from "../store/actions";

const mapStateToProps = (state) => {
    return {
        query: state.query,
        currentQuery: state.currentQuery,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setQueryResult: (value) =>
            dispatch({ type: actionTypes.SETQUERYRESULT, val: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryData);
