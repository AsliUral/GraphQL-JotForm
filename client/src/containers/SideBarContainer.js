import React from "react";
import { connect } from "react-redux";
import SideBar from "../components/SideBar";
import { onSetSideBarOpen } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        sidebarOpen: state.project.sidebarOpen,
        sidebarDocked: state.project.sidebarDocked,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSetSidebarOpen: (value) => dispatch(onSetSideBarOpen(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
