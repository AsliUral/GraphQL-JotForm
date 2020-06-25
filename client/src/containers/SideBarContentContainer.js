import React from "react";
import { connect } from "react-redux";
import SideBarContent from "../components/SideBarContent";
import { pinSideBar } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        sidebarDocked: state.project.sidebarDocked,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        pinSideBar: (value) => dispatch(pinSideBar(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContent);
