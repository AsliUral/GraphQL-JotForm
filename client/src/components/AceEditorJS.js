import React from "react";
import AceEditor from "react-ace";
import { format } from "graphql-formatter";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import { Button, Icon, Popup, Image, Modal } from "semantic-ui-react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
const USERFORM_QUERY = gql`
    query {
        userForm(apiKey: "e8d6edf1b4b67670c947ede51ba14398") {
            id
            username
            type
            last_submission
            status
            height
            count
        }
    }
`;

class AceEditorJS extends React.Component {
    constructor(props) {
        const value = false;
        super(props);
        this.state = {
            codeJS: "",
            helper: "{ user { name} } ",
            value: "",
            copied: false,
        };
        this.user = {
            name: "",
            email: "",
            time_zone: "",
            account_type: "",
            status: "",
            loginToGetSubmissions: "",
            pdf_designer_group: "",
        };
        this.userForm = [];
        this.userdata = {};
        this.userformdata = [];
        this.historyArray = [];
    }
    onChange = (newValue) => {
        this.setState({
            codeJS: newValue,
        });
    };
    prettify = () => {
        this.setState({
            codeJS: format(this.state.codeJS),
        });
    };
    play = () => {
        this.userdata = {};
        this.userformdata = {};
        // if (this.props.codeGraphql.includes("userForm")) {
        //     console.log("ı am in userform");
        //     console.log(
        //         JSON.stringify(this.userForm.map((val) => val.username))
        //     );
        //     this.onChange(JSON.stringify(this.userForm.username));
        // }
        if (this.props.codeGraphql.includes("user")) {
            console.log("ı am in user");
            if (this.props.codeGraphql.includes("name")) {
                this.userdata.name = this.user.name;
            }
            if (this.props.codeGraphql.includes("email")) {
                this.userdata.email = this.user.email;
            }
            if (this.props.codeGraphql.includes("time_zone")) {
                this.userdata.time_zone = this.user.time_zone;
            }
            if (this.props.codeGraphql.includes("account_type")) {
                this.userdata.account_type = this.user.account_type;
            }
            if (this.props.codeGraphql.includes("status")) {
                this.userdata.status = this.user.status;
            }
            if (this.props.codeGraphql.includes("loginToGetSubmissions")) {
                this.userdata.loginToGetSubmissions = this.user.loginToGetSubmissions;
            }
            if (this.props.codeGraphql.includes("pdf_designer_group")) {
                this.userdata.pdf_designer_group = this.user.pdf_designer_group;
            }
        }
        this.historyArray.push(this.props.codeGraphql + " \n");
        console.log(this.codeJS);
        this.onChange("");
        this.onChange(JSON.stringify(this.userdata));
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
                <Modal
                    trigger={
                        <Button animated="vertical">
                            <Button.Content hidden>History</Button.Content>
                            <Button.Content visible>
                                <Icon name="history" />
                            </Button.Content>
                        </Button>
                    }
                    style={{
                        height: "auto",
                        top: "auto",
                        left: "auto",
                        bottom: "auto",
                        right: "auto",
                    }}
                >
                    <Modal.Header>History of Query</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            {this.historyArray.map((history) => (
                                <h2>
                                    {" "}
                                    {history}
                                    <CopyToClipboard text={history}>
                                        <Button animated="vertical">
                                            <Button.Content hidden>
                                                Copy
                                            </Button.Content>
                                            <Button.Content visible>
                                                <Icon name="copy" />
                                            </Button.Content>
                                        </Button>
                                    </CopyToClipboard>
                                    <br></br>
                                </h2>
                            ))}
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <CopyToClipboard
                    text={this.state.codeJS}
                    style={{
                        position: "absolute",
                        right: "40px",
                    }}
                >
                    <Button animated="vertical">
                        <Button.Content hidden>Copy</Button.Content>
                        <Button.Content visible>
                            <Icon name="copy" />
                        </Button.Content>
                    </Button>
                </CopyToClipboard>
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
                <Query query={User_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4> Loading ...</h4>;
                        if (error) console.log(error);
                        //console.log(data);
                        this.user.name = data.user.name;
                        this.user.email = data.user.email;
                        this.user.time_zone = data.user.time_zone;
                        this.user.account_type = data.user.account_type;
                        this.user.status = data.user.status;
                        this.user.loginToGetSubmissions =
                            data.user.loginToGetSubmissions;
                        this.user.pdf_designer_group =
                            data.user.loginToGetSubmissions;
                        return <div></div>;
                    }}
                </Query>
                <Query query={USERFORM_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4> Loading ...</h4>;
                        if (error) console.log(error);
                        this.userForm = data.userForm;
                        return <div></div>;
                    }}
                </Query>
                <React.Fragment>
                    {
                        <Popup
                            content={this.helper}
                            header="If you help , you can check https://graphql.org/"
                            position="bottom"
                            trigger={
                                <Image
                                    src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
                                    avatar
                                />
                            }
                        />
                    }
                </React.Fragment>
            </>
        );
    }
}

export default AceEditorJS;
