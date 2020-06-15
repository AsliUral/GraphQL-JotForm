import React from "react";
import { connect } from "react-redux";
import QueryData from "../components/QueryData";
import { setQueryResult, setQueryError } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        query: state.query,
        currentQuery: state.currentQuery,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setQueryResult: (value) => dispatch(setQueryResult(value)),
        setQueryError: (value) => dispatch(setQueryError(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryData);
