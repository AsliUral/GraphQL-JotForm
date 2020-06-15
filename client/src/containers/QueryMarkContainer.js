import React from "react";
import { connect } from "react-redux";
import QueryMark from "../components/QueryMark";
import { addMarkQuery } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        queryMark: state.queryMark,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMarkQuery: () => dispatch(addMarkQuery()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryMark);
