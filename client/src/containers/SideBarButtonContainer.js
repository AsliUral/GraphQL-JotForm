import React from "react";
import { connect } from "react-redux";
import SideBarButton from "../components/SideBarButton";
import { onSetSideBarOpen } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        sidebarOpen: state.project.sidebarOpen,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSetSidebarOpen: (value) => dispatch(onSetSideBarOpen(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarButton);
