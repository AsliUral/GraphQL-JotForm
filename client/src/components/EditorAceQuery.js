import React from "react";
import gql from "graphql-tag";

import "../style/stylem.css";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/keymap/sublime";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror-graphql/hint";
import "codemirror-graphql/lint";
import "codemirror-graphql/mode";
import "codemirror-graphql/variables/lint";
import "codemirror/addon/edit/closebrackets";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/theme/yonce.css";

function EditorAceQuery(props) {
    const EditorQueryHint = require("./EditorQueryHint");
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

    const myGraphQLSchema = gql`
        schema {
            query: Query
        }

        type Query {
            user(apiKey: String): User
            userForm(apiKey: String): [UserFormType]
            userUsage(apiKey: String): UserUsage
            userSubmissions(apiKey: String): [UserSubmissions]
            userSubusers(apiKey: String): UserSubusers
            userHistory(apiKey: String): [UserHistory]
            userFolders(apiKey: String): UserFolders
            userReports(apiKey: String): UserReport
            userSettings(apiKey: String): UserSetting
            form(apiKey: String, formID: String): form
            formQuestions(apiKey: String, formID: String): formQuestions
            submission(apiKey: String, submissionID: String): submissions
        }

        type User {
            username: String
            name: String
            email: String
            time_zone: String
            account_type: String
            status: String
            created_at: String
            updated_at: String
            website: String
            company: String
            folderLayout: String
            language: String
            avatarUrl: String
            userForm(apiKey: String): [UserFormType]
        }

        type UserFormType {
            id: String
            username: String
            type: String
            last_submission: String
            status: String
            height: Int
            count: Int
        }

        type UserUsage {
            submissions: Int
            ssl_submissions: Int
            payments: Int
            uploads: Int
        }

        type UserSubmissions {
            id: String
            form_id: String
            ip: String
            created_at: String
            updated_at: String
            status: String
            new: String
            flag: String
            userForm(apiKey: String): [UserFormType]
        }

        type UserSubusers {
            owner: String
            status: String
            email: String
            username: String
            created_at: String
            permissions: [permissions]
        }

        type permissions {
            type: String
            resource_id: String
            access_type: String
            title: String
        }

        type UserHistory {
            type: String
            formID: String
            username: String
            formTitle: String
            formStatus: String
            ip: String
            timestamp: Int
        }

        type UserFolders {
            id: String
            path: String
            owner: String
            name: String
            parent: String
            color: String
            subfolders: [subfolders]
            userForm(apiKey: String): [UserFormType]
        }

        type subfolders {
            id: String
            path: String
            owner: String
            name: String
            parent: String
            color: String
        }

        type UserReport {
            id: String
            form_id: String
            title: String
            created_at: String
            updated_at: String
            fields: String
            list_type: String
            status: String
            url: String
            isProtected: Boolean
        }

        type UserSetting {
            username: String
            name: String
            email: String
            website: String
            time_zone: String
            account_type: String
            status: String
            created_at: String
            updated_at: String
            usage: String
            industry: String
            securityAnswer: String
            company: String
            doNotClone: String
            webhooks: String
            avatarUrl: String
        }

        type form {
            id: String
            username: String
            title: String
            height: String
            url: String
            status: String
            created_at: String
            updated_at: String
            new: String
            count: String
        }

        type formQuestions {
            hint: String
            labelAlign: String
            name: String
            order: String
            qid: String
            readonly: String
            required: String
            shrink: String
            size: String
            text: String
            type: String
            validationtype: String
            userForm(apiKey: String): [UserFormType]
        }

        type submissions {
            id: String
            form_id: String
            ip: String
            created_at: String
            updated_at: String
            status: String
            new: String
            answers: submissionAnswer
        }

        type submissionAnswer {
            text: String
            type: String
            answer: String
        }
    `;

    const cursorActivity = (event) => {
        var hintOptions = {
            hint: function () {
                const val = event.getValue();

                return EditorQueryHint(val);
            },
            completeSingle: true,
        };
        event.options.hintOptions = hintOptions;
    };

    return (
        <CodeMirror
            value={props.query}
            width="700px"
            style={{
                position: "relative",
                width: "70px",
                zIndex: 999,
            }}
            options={{
                theme: "yonce",
                keyMap: "sublime",
                mode: "graphql",
                smartIndent: true,
                lineWrapping: true,
                gutters: [
                    "CodeMirror-linenumbers",
                    "CodeMirror-foldgutter",
                    "CodeMirror-lint-markers",
                ],
                foldGutter: true,
                matchBrackets: true,
                autoCloseTags: true,
                autoCloseBrackets: true,
                showHint: true,
                hintOptions: {
                    schema: myGraphQLSchema,
                },
                lint: true,
                extraKeys: {
                    "Ctrl-Space": "autocomplete",
                },
            }}
            onChange={(instance, change) => {
                props.onChangeQuery(instance.getValue());
            }}
            onCursorActivity={cursorActivity}
        />
    );
}

export default EditorAceQuery;

/*


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

*/
