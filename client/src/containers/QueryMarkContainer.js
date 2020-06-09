import React from "react";
import { connect } from "react-redux";
import QueryMark from "../components/QueryMark";

const mapStateToProps = (state) => {
    return {
        querymark: state.querymark,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMarkQuery: () => dispatch({ type: "ADDMARKQUERY" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryMark);
