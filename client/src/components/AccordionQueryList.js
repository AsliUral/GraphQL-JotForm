import React from "react";
import { Accordion, Message, Tab } from "semantic-ui-react";
import SearchQuery from "./SearchQuery";
import { connect } from "react-redux";
import CopyToClipboard from "./CopyToClipboard";

class AccordionExampleNested extends React.Component {
    constructor(props) {
        super(props);
    }

    // find more easy way
    userQuery =
        "name: { type: GraphQLString },email: { type: GraphQLString },time_zone: { type: GraphQLString },account_type: { type: GraphQLString },status: { type: GraphQLString }, loginToGetSubmissions: { type: GraphQLInt }, pdf_designer_group: { type: GraphQLInt },}";

    userFormQuery =
        "id: { type: GraphQLString }," +
        " username: { type: GraphQLString }," +
        "type: { type: GraphQLString }," +
        "last_submission: { type: GraphQLString }," +
        "status: { type: GraphQLString }," +
        "height: { type: GraphQLInt }," +
        "count: { type: GraphQLInt },";

    userFormContent_User = (
        <div>
            <Message>{this.userFormQuery}</Message>
        </div>
    );

    user = [
        {
            key: "panel-1a",
            title: "userForm",
            content: this.userFormContent_User,
        },
    ];

    userContent = (
        <div>
            Schema Details
            <Message>
                {this.userQuery}
                <Accordion.Accordion panels={this.user} />
            </Message>
        </div>
    );

    userFormContent = (
        <div>
            Schema Details
            <div>
                <Message>{this.userFormQuery}</Message>
            </div>
        </div>
    );

    rootPanels = [
        {
            key: "panel-1",
            title: "user query",
            content: { content: this.userContent },
        },
        {
            key: "panel-2",
            title: "userForm query",
            content: { content: this.userFormContent },
        },
    ];
    panes = [
        {
            menuItem: "Marked Query",
            render: () => (
                <Tab.Pane>
                    {this.props.querymark.map((q) => {
                        return (
                            <div>
                                <CopyToClipboard text={q} />
                                <li> {q}</li>
                            </div>
                        );
                    })}
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Schema Details",
            render: () => (
                <Tab.Pane>
                    <Accordion
                        defaultActiveIndex={0}
                        panels={this.rootPanels}
                        styled
                    />
                </Tab.Pane>
            ),
        },
    ];
    render() {
        return (
            <div>
                <h1> JotForm Query</h1>
                {this.props.querymark.map((q) => {})}
                {/* <SearchQuery />
                <Accordion
                    defaultActiveIndex={0}
                    panels={this.rootPanels}
                    styled
                /> */}
                <Tab panes={this.panes} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        querymark: state.querymark,
    };
};

export default connect(mapStateToProps)(AccordionExampleNested);
