import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

import QueryResult from "./QueryResult";
import EditorAceQuery from "../containers/EditorAceQueryContainer";
import Navbar from "./Navbar";

import CodeMirror from "codemirror";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/lint/lint";
import "codemirror-graphql/hint";
import "codemirror-graphql/lint";
import "codemirror-graphql/mode";
function Editor() {
    return (
        <>
            <div>
                <div className="navbarstyle">
                    <Navbar />
                </div>
                <div className="editorstyle">
                    <EditorAceQuery />
                </div>
                <div className="resultstyle">
                    <QueryResult />
                </div>
            </div>
        </>
    );
}

export default Editor;
