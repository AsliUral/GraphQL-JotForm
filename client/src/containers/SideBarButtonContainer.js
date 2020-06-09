import React from "react";
import { connect } from "react-redux";
import SideBarButton from "../components/SideBarButton";

const mapStateToProps = (state) => {
    return {
        sidebarOpen: state.sidebarOpen,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSetSidebarOpen: (value) =>
            dispatch({ type: "ONSETSIDEBAROPEN", val: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarButton);
