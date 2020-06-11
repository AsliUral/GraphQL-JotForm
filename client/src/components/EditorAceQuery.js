import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

function EditorAceQuery(props) {
    return (
        <>
            <AceEditor
                mode="graphqlschema"
                theme="dracula"
                style={{
                    position: "absolute",
                    left: "40px",
                    width: "700px",
                    zIndex: 999,
                }}
                value={props.query}
                onChange={props.onChangeQuery}
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

export default EditorAceQuery;
