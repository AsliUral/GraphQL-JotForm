import React from "react";
import { connect } from "react-redux";
import SideBar from "../components/SideBar";

const mapStateToProps = (state) => {
    return {
        sidebarOpen: state.sidebarOpen,
        sidebarDocked: state.sidebarDocked,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSetSidebarOpen: (value) =>
            dispatch({ type: "ONSETSIDEBAROPEN", val: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
