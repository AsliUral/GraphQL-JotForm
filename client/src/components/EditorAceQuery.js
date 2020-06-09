import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

class EditorAceQuery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <AceEditor
                    mode="graphqlschema"
                    theme="dracula"
                    style={{
                        position: "absolute",
                        left: "40px",
                        width: "700px",
                    }}
                    value={this.props.codeGraphql}
                    onChange={this.props.onChangecodeGraphql}
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

export default EditorAceQuery;
