import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-katzenmilch";
import "ace-builds/src-noconflict/ext-language_tools";

function editorCollaborate(props) {
    let markers = [];

    const setCodeFunction = (val) => {
        props.onChange(val);
        let cursorPosition = {
            line: 0,
            ch: 0,
        };
        let value = {
            code: props.code,
            position: cursorPosition,
        };
        props.setCode(value, props.auth);
    };

    return (
        <>
            <AceEditor
                mode="graphqlschema"
                theme="katzenmilch"
                style={{
                    position: "absolute",
                    left: "40px",
                    width: "700px",
                    zIndex: 999,
                }}
                value={props.code}
                onChange={setCodeFunction}
                name="UNIQUE_ID_OF_DIV"
                enableSnippets={true}
                enableLiveAutocompletion={true}
                enableBasicAutocompletion={true}
                highlightActiveLine={true}
                // markers={mark()}
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

export default editorCollaborate;
