import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import HistoryModal from "./HistoryModal/HistoryModal";
import AceEditorJS from "./AceEditorJS/AceEditorJS";
import PopupIcon from "./PopupIcon/PopupIcon";
import Loader from "./Loader/Loader";

class QueryResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeJS: {},
            copied: false,
            queryText: "",
            currentQuery: gql`
                {
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
        this.historyArray.push(this.props.codeGraphql + " \n");
    };
    //set aceEditorJs data
    setData = (data) => {
        this.setState({
            codeJS: data,
        });
        this.setState({
            buttonClick: false,
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
                <AceEditorJS codeJS={this.state.codeJS} />
                {this.state.buttonClick === true ? (
                    <Query query={this.state.currentQuery}>
                        {({ loading, error, data }) => {
                            if (loading) return <Loader />;
                            if (error) console.log(error);
                            this.setData(data);
                            return "";
                        }}
                    </Query>
                ) : null}
                <PopupIcon />
            </>
        );
    }
}

export default QueryResult;
