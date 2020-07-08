import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebase from "../config/fbConfig";

import {
    sendMessage,
    setChannelMessageValue,
    setTyping,
    removeTyping,
} from "../store/messageActions";
import MessagesForm from "../components/social/MessagesForm";

const mapStateToProps = (state) => {
    return {
        messages: state.message.messages,
        messagesError: state.message.messagesError,
        typingRef: firebase.database().ref("typing"),
        channels: state.channel.currentChannel,
        currentUser: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (value, id) => dispatch(sendMessage(value, id)),
        setChannelMessageValue: (value) =>
            dispatch(setChannelMessageValue(value)),
        setTyping: (value) => dispatch(setTyping(value)),
        removeTyping: (value) => dispatch(removeTyping(value)),
    };
};

//export default AceEditorGraphql;
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "messages" }])
)(MessagesForm);
