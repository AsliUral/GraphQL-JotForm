import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

// import { sendMessage, setChannelMessageValue } from "../store/messageActions";
import Messages from "../components/social/Messages";

const mapStateToProps = (state) => {
    return {
        messages: state.firestore.ordered.messages,
        messagesError: state.message.messagesError,
        user: state.firebase.profile,
        channelName: state.channel.currentChannel.channelName,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "messages" }])
)(Messages);
