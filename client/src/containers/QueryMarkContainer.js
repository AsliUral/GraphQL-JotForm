import React from "react";
import { connect } from "react-redux";
import QueryMark from "../components/QueryMark";

const mapStateToProps = (state) => {
    return {
        queryMark: state.queryMark,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMarkQuery: () => dispatch({ type: "ADDMARKQUERY" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryMark);
