import { firestoreReducer } from "redux-firestore";
import * as actionTypes from "./messageActions";

const initialState = {
    messages: "",
    messagesError: "",
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SENDMESSAGE:
            return {
                ...state,
                messages: "",
            };
        case actionTypes.SETCHANNELMESSAGEVALUE:
            return {
                ...state,
                messages: action.val,
            };
        case actionTypes.SENDMESSAGEERROR:
            return {
                ...state,
                messagesError: action.val.message,
            };
        case actionTypes.SETTYPING:
            return {
                ...state,
            };
        case actionTypes.REMOVETYPING:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default messageReducer;
