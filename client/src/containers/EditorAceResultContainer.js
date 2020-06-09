import React from "react";
import { connect } from "react-redux";

import EditorAceResult from "../components/EditorAceResult";

const mapStateToProps = (state) => {
    return {
        codeJS: state.codeJS,
    };
};

export default connect(mapStateToProps)(EditorAceResult);
