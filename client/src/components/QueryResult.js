import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CopyToClipboard from "./CopyToClipboard";
import HistoryModal from "./HistoryModal";
import AceEditorJS from "./AceEditorJS";
import PopupIcon from "./PopupIcon";

class QueryResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeJS: "",
            copied: false,
            queryText: "",
            currentQuery: gql`
                query {
                    ${`queryText`}
                }
            `,
            buttonClick: false,
        };
        this.historyArray = [];
    }

    //run query
    play = () => {
        this.setState({
            currentQuery: gql`
                ${this.props.codeGraphql}
            `,
            queryText: this.props.codeGraphql,
        });
        this.setState({
            buttonClick: true,
        });
        const User_QUERY = gql`
            ${this.props.codeGraphql}
        `;
        this.historyArray.push(this.props.codeGraphql + " \n");
    };
    //set aceEditorJs data
    setData = (data) => {
        this.setState({
            codeJS: data,
        });
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
                <HistoryModal historyArray={this.historyArray} />
                <CopyToClipboard copy={this.state.codeJS} />
                <AceEditorJS codeJS={this.state.codeJS} />
                {this.state.buttonClick === true ? (
                    <Query query={this.state.currentQuery}>
                        {({ loading, error, data }) => {
                            if (loading) return <h4> Loading ...</h4>;
                            if (error) console.log(error);
                            this.setData(JSON.stringify(data));
                            this.setState({
                                codeJS: JSON.stringify(data),
                            });
                            this.setState({
                                buttonClick: false,
                            });
                            return data.user.name;
                        }}
                    </Query>
                ) : null}
                <PopupIcon />
            </>
        );
    }
}

export default QueryResult;
