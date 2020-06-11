import React from "react";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import ReactJson from "react-json-view";

function EditorAceResult(props) {
    return (
        <>
            <ReactJson
                src={props.result}
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

export default EditorAceResult;
