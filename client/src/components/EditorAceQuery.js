import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import "../style/stylem.css";

function EditorAceQuery(props) {
    let markers = [];
    for (var i = 0; i < props.error.length; i++) {
        markers.push({
            startRow: props.error[i].locations[0].line - 1,
            startCol: 0,
            endRow: props.error[i].locations[0].line - 1,
            endCol: props.error[i].locations[0].line - 1,
            className: "replacement_marker",
            type: "text",
        });
    }

    const mark = () => {
        if (props.errorHappen) {
            return markers;
        } else {
            markers = [];
            return markers;
        }
    };
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
                markers={mark()}
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
