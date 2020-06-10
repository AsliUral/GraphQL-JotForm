import React from "react";
import SideBarMarkedQueryTab from "../components/SideBarMarkedQueryTab";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        queryMark: state.queryMark,
    };
};

export default connect(mapStateToProps)(SideBarMarkedQueryTab);
