import React from "react";
import { connect } from "react-redux";

import EditorAceResult from "../components/EditorAceResult";

const mapStateToProps = (state) => {
    return {
        result: state.project.result,
    };
};

export default connect(mapStateToProps)(EditorAceResult);
