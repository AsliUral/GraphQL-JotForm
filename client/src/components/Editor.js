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

// const schema = `GraphQLSchema {
//     __validationErrors: undefined,
//     description: undefined,
//     extensions: undefined,
//     astNode: undefined,
//     extensionASTNodes: undefined,
//     _queryType: RootQueryType,
//     _mutationType: undefined,
//     _subscriptionType: undefined,
//     _directives: [ @include, @skip, @deprecated ],
//     _typeMap: [Object: null prototype] {
//       RootQueryType: RootQueryType,
//       User: User,
//       String: String,
//       UserFormType: UserFormType,
//       Int: Int,
//       UserUsage: UserUsage,
//       UserSubmissions: UserSubmissions,
//       UserSubusers: UserSubusers,
//       permissions: permissions,
//       UserHistory: UserHistory,
//       UserFolders: UserFolders,
//       subfolders: subfolders,
//       UserReport: UserReport,
//       Boolean: Boolean,
//       UserSetting: UserSetting,
//       form: form,
//       formQuestions: formQuestions,
//       submissions: submissions,
//       submissionAnswer: submissionAnswer,
//       __Schema: __Schema,
//       __Type: __Type,
//       __TypeKind: __TypeKind,
//       __Field: __Field,
//       __InputValue: __InputValue,
//       __EnumValue: __EnumValue,
//       __Directive: __Directive,
//       __DirectiveLocation: __DirectiveLocation
//     },
//     _subTypeMap: [Object: null prototype] {},
//     _implementationsMap: [Object: null prototype] {}
//   }`;

// CodeMirror.fromTextArea(<EditorAceQuery />, {
//     mode: "graphql",
//     lint: {
//         schema: schema,
//     },
//     hintOptions: {
//         schema: schema,
//     },
// });

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
