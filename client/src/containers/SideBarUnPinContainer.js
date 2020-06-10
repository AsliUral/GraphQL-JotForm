import React from "react";
import { connect } from "react-redux";
import SideBarUnPin from "../components/SideBarUnPin";

const mapStateToProps = (state) => {
    return {
        sidebarDocked: state.sidebarDocked,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        pinSideBar: (value) => dispatch({ type: "PINSIDEBAR", val: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarUnPin);
