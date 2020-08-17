import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Messages from "../components/social/Messages";

const mapStateToProps = (state) => {
    return {
        messages: state.firestore.ordered.messages,
        messagesError: state.message.messagesError,
        user: state.firebase.profile,
        channelName: state.channel.currentChannel.channelName,
        currentChannel: state.channel.currentChannel,
        typing: state.firestore.ordered.typing,
        currentUser: state.firebase.auth,
        allUser: state.firestore.ordered.users,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "messages" }]),
    firestoreConnect([{ collection: "typing" }])
)(Messages);
