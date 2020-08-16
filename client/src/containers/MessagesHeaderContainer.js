import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

// import { sendMessage, setChannelMessageValue } from "../store/messageActions";
import MessagesHeader from "../components/social/MessagesHeader";

const mapStateToProps = (state) => {
    return {
        channelName: state.channel.currentChannel.channelName,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "messages" }])
)(MessagesHeader);
