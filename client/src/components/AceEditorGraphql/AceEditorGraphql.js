import React from "react";
import { connect } from "react-redux";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import { Button, Icon } from "semantic-ui-react";

import QueryResult from "./QueryResult/QueryResult";
import CopyToClipboard from "./CopyToClickboard/CopyToClipboard";

class AceEditorGraphql extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Button
                    animated="vertical"
                    onClick={this.props.prettifycodeGraphql}
                >
                    <Button.Content hidden>Prettify</Button.Content>
                    <Button.Content visible>
                        <Icon name="leaf" />
                    </Button.Content>
                </Button>
                <CopyToClipboard copy={this.props.codeGraphql} />
                <AceEditor
                    mode="graphqlschema"
                    theme="dracula"
                    style={{
                        position: "absolute",
                        left: "40px",
                        width: "700px",
                    }}
                    value={this.props.codeGraphql}
                    onChange={this.props.onChangecodeGraphql}
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
                <QueryResult />
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        codeGraphql: state.codeGraphql,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangecodeGraphql: (value) =>
            dispatch({ type: "ONCHANGEGRAPHQL", val: value }),
        prettifycodeGraphql: () => dispatch({ type: "PRETTIFYGRAPHQL" }),
    };
};

//export default AceEditorGraphql;
export default connect(mapStateToProps, mapDispatchToProps)(AceEditorGraphql);
