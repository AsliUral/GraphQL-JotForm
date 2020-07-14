import { firestoreReducer } from "redux-firestore";
import * as actionTypes from "./channelActions";

const initialState = {
    channels: [],
    modal: false,
    channelName: "",
    channelDetails: "",
    channelsRef: "",
    currentChannel: "",
    users: [],
    usersStatus: [],
};

const channelReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SETOPENMODAL:
            return {
                ...state,
                modal: action.val,
            };
        case actionTypes.SETCHANNELNAMEVALUE:
            return {
                ...state,
                channelName: action.val,
            };
        case actionTypes.SETCHANNELDETAILSVALUE:
            return {
                ...state,
                channelDetails: action.val,
            };
        case actionTypes.ADDCHANNELS:
            return {
                ...state,
            };
        case actionTypes.SETCURRENTCHANNEL:
            return {
                ...state,
                currentChannel: action.val,
            };
        case actionTypes.ADDONLINE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default channelReducer;
