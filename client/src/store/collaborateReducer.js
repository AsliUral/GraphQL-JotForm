import { firestoreReducer } from "redux-firestore";
import * as actionTypes from "./collaborateActions";

const initialState = {
    code: "loading...",
    cursorPosition: {
        line: 0,
        ch: 0,
    },
};

const collaborateReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SETCODE:
            return {
                ...state,
                code: action.val.code,
                cursorPosition: action.val.cursorPosition,
            };
        case actionTypes.ONCHANGE:
            return {
                ...state,
                code: action.val,
            };
        default:
            return state;
    }
};

export default collaborateReducer;
