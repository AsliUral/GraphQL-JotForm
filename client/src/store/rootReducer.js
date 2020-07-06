import ProjectReducer from "./reducer";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import channelReducer from "./channelReducer";
import { firebaseReducer } from "react-redux-firebase";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    project: ProjectReducer,
    auth: authReducer,
    message: messageReducer,
    channel: channelReducer,
    firebase: firebaseReducer,
});
export default rootReducer;
