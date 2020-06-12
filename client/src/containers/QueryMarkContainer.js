import React from "react";
import { connect } from "react-redux";
import QueryMark from "../components/QueryMark";
import * as actionTypes from "../store/actions";

const mapStateToProps = (state) => {
    return {
        queryMark: state.queryMark,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMarkQuery: () => dispatch({ type: actionTypes.ADDMARKQUERY }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryMark);
