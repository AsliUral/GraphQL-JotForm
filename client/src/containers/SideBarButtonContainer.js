import React from "react";
import { connect } from "react-redux";
import SideBarButton from "../components/SideBarButton";
import * as actionTypes from "../store/actions";

const mapStateToProps = (state) => {
    return {
        sidebarOpen: state.sidebarOpen,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSetSidebarOpen: (value) =>
            dispatch({ type: actionTypes.ONSETSIDEBAROPEN, val: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarButton);
