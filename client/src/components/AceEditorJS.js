import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import { format } from "graphql-formatter";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import { Button, Icon } from "semantic-ui-react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import UserQuery from "./UserQuery";

const User_QUERY = gql`
    query UserQuery {
        user {
            name
            email
            time_zone
            account_type
            status
            loginToGetSubmissions
            pdf_designer_group
        }
    }
`;

class AceEditorJS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeJS: "",
        };
    }
    onChange = (newValue) => {
        this.setState({
            codeJS: newValue,
        });
        console.log("change", newValue);
    };
    prettify = () => {
        this.setState({
            codeJS: format(this.state.codeJS),
        });
    };
    play = () => {
        this.onChange("Asli");
    };
    render() {
        return (
            <>
                <Button animated="vertical" onClick={this.play}>
                    <Button.Content hidden>Run</Button.Content>
                    <Button.Content visible>
                        <Icon name="play circle outline" />
                    </Button.Content>
                </Button>
                <AceEditor
                    mode="javascript"
                    theme="dracula"
                    style={{
                        position: "absolute",
                        right: "40px",
                        width: "700px",
                    }}
                    value={this.state.codeJS}
                    onChange={this.onChange}
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
