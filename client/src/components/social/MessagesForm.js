import React from "react";
import { Segment, Button, Input } from "semantic-ui-react";
function MessagesForm(props) {
    const handleChange = (event) => {
        if (event.target.id === "message") {
            props.setChannelMessageValue(event.target.value);
        }
    };
    const handleKeyDown = () => {
        if (props.messages) {
            let typing = {
                channelName: props.channels.channelName,
                uid: props.currentUser.uid,
                channelid: props.channels.id,
            };
            props.setTyping(typing);
        } else {
            let typing = {
                channelName: props.channels.channelName,
                uid: props.currentUser.uid,
                channelid: props.channels.id,
            };
            props.removeTyping(typing);
        }
    };
    return (
        <Segment className="message__from">
            <Input
                fluid
                style={{ marginBottom: "0.7em" }}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                label={<Button icon={"add"} />}
                name="message"
                id="message"
                value={props.messages}
                labelPosition="left"
                className={
                    props.messagesError.includes("message") ? "error" : ""
                }
                placeholder="write your message"
            />
            <Button.Group icon widths="2">
                <Button
                    onClick={() =>
                        props.sendMessage(props.messages, props.currentUser.uid)
                    }
                    color="teal"
                    content="Add reply"
                    labelPosition="left"
                    icon="edit"
                />
            </Button.Group>
        </Segment>
    );
}

export default MessagesForm;
