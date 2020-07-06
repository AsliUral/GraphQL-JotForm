import React from "react";
import {
    Segment,
    Comment,
    MessageHeader,
    Header,
    Icon,
    Input,
} from "semantic-ui-react";
function MessagesHeader(props) {
    return (
        <Segment clearing>
            <Header
                fluid="true"
                as="h2"
                floated="right"
                style={{ marginBottom: 0 }}
            >
                <span>
                    {props.channelName}
                    <Icon name={"star outline"} color="black" />
                </span>
            </Header>
            <Header floated="right">
                <Input
                    size="mini"
                    icon="search"
                    name="searchTearm"
                    placeholder="Search Messages"
                />
            </Header>
        </Segment>
    );
}

export default MessagesHeader;
