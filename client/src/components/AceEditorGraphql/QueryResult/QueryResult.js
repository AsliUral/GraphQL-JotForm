import React from "react";
import { connect } from "react-redux";

import { Button, Icon } from "semantic-ui-react";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import { Query } from "react-apollo";
import HistoryModal from "./HistoryModal/HistoryModal";
import AceEditorJS from "./AceEditorJS/AceEditorJS";
import PopupIcon from "./PopupIcon/PopupIcon";
import Loader from "./Loader/Loader";

class QueryResult extends React.Component {
    constructor(props) {
        super(props);
        this.historyArray = [];
    }

    //run query
    play = () => {
        this.props.resultOfPlay();
        this.historyArray.push(this.props.codeGraphql + " \n");
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
                <AceEditorJS />
                {this.props.playButtonClick === true ? (
                    <Query query={this.props.currentQuery}>
                        {({ loading, error, data }) => {
                            if (loading) return <Loader />;
                            if (error) console.log(error);
                            if (data) {
                                this.props.setQueryResult(data);
                                return "";
                            } else {
                                const wrongQuery = {
                                    Message: "Wrong Query",
                                    Helper: "Please check docs",
                                    Query: this.props.codeGraphql,
                                };
                                this.setData(wrongQuery);
                                return "";
                            }
                        }}
                    </Query>
                ) : null}
                <PopupIcon />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        codeJS: state.codeJS,
        queryText: state.queryText,
        currentQuery: state.currentQuery,
        playButtonClick: state.playButtonClick,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        resultOfPlay: () => dispatch({ type: "RESULTOFPLAY" }),
        setQueryResult: (value) =>
            dispatch({ type: "SETQUERYRESULT", val: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryResult);
