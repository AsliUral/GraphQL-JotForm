import React from "react";
import { Segment, Button, Input } from "semantic-ui-react";
import { Picker, emojiIndex } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
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

    const handleToggerPicker = () => {
        props.setEmojiPicker(!props.emojiPicker);
    };

    const colonToUnicode = (message) => {
        return message.replace(/:[A-Za-z0-9_+-]+:/g, (x) => {
            x = x.replace(/:/g, "");
            let emoji = emojiIndex.emojis[x];
            if (typeof emoji !== "undefined") {
                let unicode = emoji.native;
                if (typeof unicode !== "undefined") {
                    return unicode;
                }
            }
            x = ":" + x + ":";
            return x;
        });
    };
    const handleAddEmoji = (emoji) => {
        const oldMessage = props.messages;
        const newMessage = colonToUnicode(`${oldMessage} ${emoji.colons}`);
        props.setChannelMessageValue(newMessage);
        props.setEmojiPicker(false);
    };
    return (
        <Segment className="message__from">
            {props.emojiPicker && (
                <Picker
                    set="apple"
                    className="emojipicker"
                    onSelect={handleAddEmoji}
                    title="pick your emoji"
                    emoji="point_up"
                />
            )}
            <Input
                fluid
                style={{ marginBottom: "0.7em" }}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                label={<Button icon={"add"} onClick={handleToggerPicker} />}
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
