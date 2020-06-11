import React from "react";
import { Accordion, Message } from "semantic-ui-react";

function SideBarSchemaTab(props) {
    // find more easy way
    const userQuery =
        "name: { type: GraphQLString },email: { type: GraphQLString },time_zone: { type: GraphQLString },account_type: { type: GraphQLString },status: { type: GraphQLString }, loginToGetSubmissions: { type: GraphQLInt }, pdf_designer_group: { type: GraphQLInt },}";

    const userFormQuery =
        "id: { type: GraphQLString }," +
        " username: { type: GraphQLString }," +
        "type: { type: GraphQLString }," +
        "last_submission: { type: GraphQLString }," +
        "status: { type: GraphQLString }," +
        "height: { type: GraphQLInt }," +
        "count: { type: GraphQLInt },";

    const userFormContent_User = (
        <div>
            <Message>{userFormQuery}</Message>
        </div>
    );

    const user = [
        {
            key: "panel-1a",
            title: "userForm",
            content: userFormContent_User,
        },
    ];

    const userContent = (
        <div>
            Schema Details
            <Message>
                {userQuery}
                <Accordion.Accordion panels={user} />
            </Message>
        </div>
    );

    const userFormContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormQuery}</Message>
            </div>
        </div>
    );

    const rootPanels = [
        {
            key: "panel-1",
            title: "user query",
            content: { content: userContent },
        },
        {
            key: "panel-2",
            title: "userForm query",
            content: { content: userFormContent },
        },
    ];

    return <Accordion defaultActiveIndex={0} panels={rootPanels} styled />;
}

export default SideBarSchemaTab;
