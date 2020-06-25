import { firestoreReducer } from "redux-firestore";
import * as actionTypes from "./authActions";

const initialState = {
    authError: null,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                authError: null,
            };
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                authError: "Login failed",
            };
        case actionTypes.SIGNOUT_SUCCESS:
            return state;
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                authError: null,
            };
        case actionTypes.SIGNUP_ERROR:
            return {
                ...state,
                authError: action.err.message,
            };
        case actionTypes.SETSIGNPASSWORDVALUE:
            return {
                ...state,
                password: action.val,
            };
        case actionTypes.SETSIGNEMAILVALUE:
            return {
                ...state,
                email: action.val,
            };
        case actionTypes.SETSIGNFIRSTNAMEVALUE:
            return {
                ...state,
                firstName: action.val,
            };
        case actionTypes.SETSIGNLASTNAMEVALUE:
            return {
                ...state,
                lastName: action.val,
            };
        default:
            return state;
    }
};

export default authReducer;
