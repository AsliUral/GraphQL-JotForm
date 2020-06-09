import React from "react";
import { connect } from "react-redux";
import HistoryModal from "../components/HistoryModal";

const mapStateToProps = (state) => {
    return {
        queryHistory: state.queryHistory,
    };
};

export default connect(mapStateToProps)(HistoryModal);
