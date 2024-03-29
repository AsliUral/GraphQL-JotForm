import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebase from "../config/fbConfig";

import {
    sendMessage,
    setChannelMessageValue,
    setTyping,
    removeTyping,
    setEmojiPicker,
} from "../store/messageActions";
import MessagesForm from "../components/social/MessagesForm";

const mapStateToProps = (state) => {
    return {
        messages: state.message.messages,
        messagesError: state.message.messagesError,
        typingRef: firebase.database().ref("typing"),
        channels: state.channel.currentChannel,
        currentUser: state.firebase.auth,
        emojiPicker: state.message.emojiPicker,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (value, id) => dispatch(sendMessage(value, id)),
        setChannelMessageValue: (value) =>
            dispatch(setChannelMessageValue(value)),
        setTyping: (value) => dispatch(setTyping(value)),
        removeTyping: (value) => dispatch(removeTyping(value)),
        setEmojiPicker: (value) => dispatch(setEmojiPicker(value)),
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "messages" }])
)(MessagesForm);
