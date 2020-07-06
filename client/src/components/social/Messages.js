import React from "react";
import { Segment, Comment, MessageHeader } from "semantic-ui-react";
import MessagesHeader from "../../containers/MessagesHeaderContainer";
import MessageForm from "../../containers/MessagesFormContainer";
import moment from "moment";
import Typing from "./Typing";

function Messages(props) {
    console.log(props.messages);
    if (typeof props.messages === "undefined") {
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

    return (
        <React.Fragment>
            <MessagesHeader />
            <Segment>
                <Comment.Group className="messages">
                    {props.messages.map((message) =>
                        message.channelName === props.channelName ? (
                            <Comment>
                                <Comment.Avatar
                                    src={
                                        "https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
                                    }
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
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "black",
                        }}
                    >
                        <span className="user__typing">asli is typing</span>
                        <Typing />
                    </div>
                </Comment.Group>
            </Segment>
            <MessageForm />
        </React.Fragment>
    );
}

export default Messages;
