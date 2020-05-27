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
import AceEditorJS from "./AceEditorJS";

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

class AceEditorGraphql extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeGraphql: "",
        };
    }
    onChange = (newValue) => {
        this.setState({
            codeGraphql: newValue,
        });
        console.log("change", newValue);
    };
    prettify = () => {
        this.setState({
            codeGraphql: format(this.state.codeGraphql),
        });
    };
    render() {
        return (
            <>
                <Button animated="vertical" onClick={this.prettify}>
                    <Button.Content hidden>Prettify</Button.Content>
                    <Button.Content visible>
                        <Icon name="leaf" />
                    </Button.Content>
                </Button>
                <AceEditor
                    mode="graphqlschema"
                    theme="dracula"
                    style={{
                        position: "absolute",
                        left: "40px",
                        width: "700px",
                    }}
                    value={this.state.codeGraphql}
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
                <AceEditorJS codeGraphql={this.state.codeGraphql} />
            </>
        );
    }
}

export default AceEditorGraphql;
