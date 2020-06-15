import React from "react";
import { connect } from "react-redux";
import SideBarUnPin from "../components/SideBarUnPin";
import { pinSideBar } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        sidebarDocked: state.sidebarDocked,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        pinSideBar: (value) => dispatch(pinSideBar(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarUnPin);
