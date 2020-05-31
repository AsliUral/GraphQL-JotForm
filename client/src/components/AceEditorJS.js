import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

class AceEditorJS extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <AceEditor
                    mode="json"
                    theme="dracula"
                    style={{
                        position: "absolute",
                        right: "40px",
                        width: "700px",
                    }}
                    value={this.props.codeJS}
                    name="UNIQUE_ID_OF_DIV"
                    enableSnippets={true}
                    enableLiveAutocompletion={true}
                    enableBasicAutocompletion={true}
                    highlightActiveLine={true}
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        wrapBehavioursEnabled: true,
                    }}
                />
            </>
        );
    }
}

export default AceEditorJS;
