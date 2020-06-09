import React from "react";
import { connect } from "react-redux";
import QueryData from "../components/QueryData";

const mapStateToProps = (state) => {
    return {
        queryText: state.queryText,
        currentQuery: state.currentQuery,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setQueryResult: (value) =>
            dispatch({ type: "SETQUERYRESULT", val: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryData);
