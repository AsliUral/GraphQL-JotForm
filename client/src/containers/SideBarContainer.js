import React from "react";
import { connect } from "react-redux";
import SideBar from "../components/SideBar";
import { onSetSideBarOpen } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        sidebarOpen: state.sidebarOpen,
        sidebarDocked: state.sidebarDocked,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSetSidebarOpen: (value) => dispatch(onSetSideBarOpen(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
