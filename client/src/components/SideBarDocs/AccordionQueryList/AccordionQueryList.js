import React from "react";
import { Accordion, Message } from "semantic-ui-react";

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

    render() {
        return (
            <div>
                <h1> JotForm Query</h1>
                <Accordion
                    defaultActiveIndex={0}
                    panels={this.rootPanels}
                    styled
                />
            </div>
        );
    }
}

export default AccordionExampleNested;
