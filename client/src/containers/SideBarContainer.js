import React from "react";
import { connect } from "react-redux";
import SideBar from "../components/SideBar";
import * as actionTypes from "../store/actions";

const mapStateToProps = (state) => {
    return {
        sidebarOpen: state.sidebarOpen,
        sidebarDocked: state.sidebarDocked,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSetSidebarOpen: (value) =>
            dispatch({ type: actionTypes.ONSETSIDEBAROPEN, val: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
