import React from "react";
import { Segment, Comment, MessageHeader } from "semantic-ui-react";
import MessagesHeader from "../../containers/MessagesHeaderContainer";
import MessageForm from "../../containers/MessagesFormContainer";
import moment from "moment";
import Typing from "./Typing";

function Messages(props) {
    if (typeof props.messages === "undefined") {
        return <div></div>;
    }
    if (typeof props.typing === "undefined") {
        return <div></div>;
    }
    const isOwnMessage = (message, user) => {
        return message.message.currentUser.firstName === user.firstName &&
            message.message.currentUser.lastName === user.lastName
            ? "message__self"
            : "";
    };

    const timeFromNow = (timestamp) => {
        return moment(timestamp.toDate()).fromNow();
    };

    let person = [];
    props.typing.map((val) => {
        if (val.uid != props.currentUser.uid) {
            props.allUser.map((v) => {
                if (v.id == val.uid) {
                    if (val.channelId === props.currentChannel.id)
                        person.push(v);
                }
            });
        }
    });

    person = [...new Set(person.map((p) => p))];

    var copyM = props.messages.slice();

    const compare = require("./SortMessage");

    copyM.sort(compare);

    const TypingDiv = () => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                marginBottom: "0.2em",
            }}
        >
            <span className="user__typing">
                {person.map((p) => p.firstName)} is typing
            </span>
            <Typing />
        </div>
    );

    return (
        <React.Fragment>
            <MessagesHeader />
            <Segment>
                <Comment.Group className="messages">
                    {copyM.map((message) =>
                        message.channelName === props.channelName ? (
                            <Comment>
                                <Comment.Avatar
                                    src={message.message.currentUser.avatar}
                                />
                                <Comment.Content
                                    className={isOwnMessage(
                                        message,
                                        props.user
                                    )}
                                >
                                    <Comment.Author as="a">
                                        {message.message.currentUser.firstName}{" "}
                                        {message.message.currentUser.lastName}
                                    </Comment.Author>
                                    <Comment.Metadata>
                                        {timeFromNow(message.message.timestamp)}
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        {message.message.content}
                                    </Comment.Text>
                                </Comment.Content>
                            </Comment>
                        ) : null
                    )}

                    {person.length === 0 ? null : TypingDiv()}
                </Comment.Group>
            </Segment>
            <MessageForm />
        </React.Fragment>
    );
}

export default Messages;
