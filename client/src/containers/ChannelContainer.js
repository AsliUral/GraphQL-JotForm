import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Channel from "../components/social/Channels";
import {
    setOpenModal,
    setChannelNameValue,
    setChannelDetailsValue,
    setCurrentChannel,
    addChannel,
} from "../store/channelActions";
const mapStateToProps = (state) => {
    return {
        channelModal: state.channel.modal,
        channels: state.firestore.ordered.channels,
        channelName: state.channel.channelName,
        channelDetails: state.channel.channelDetails,
        channelsRef: state.channel.channelsRef,
        currentChannel: state.channel.currentChannel,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setOpenModal: (value) => dispatch(setOpenModal(value)),
        setChannelNameValue: (value) => dispatch(setChannelNameValue(value)),
        setChannelDetailsValue: (value) =>
            dispatch(setChannelDetailsValue(value)),
        addChannel: (value) => dispatch(addChannel(value)),
        setCurrentChannel: (value) => dispatch(setCurrentChannel(value)),
    };
};

//export default AceEditorGraphql;
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "channels" }])
)(Channel);
