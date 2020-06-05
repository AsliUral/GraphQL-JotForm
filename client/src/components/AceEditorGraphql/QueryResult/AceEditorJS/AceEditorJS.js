import React from "react";
import { connect } from "react-redux";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import ReactJson from "react-json-view";

class AceEditorJS extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <ReactJson
                    src={this.props.codeJS}
                    style={{
                        position: "absolute",
                        right: "40px",
                        width: "700px",
                    }}
                    theme="ocean"
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        codeJS: state.codeJS,
    };
};

export default connect(mapStateToProps)(AceEditorJS);
