import ProjectReducer from "./reducer";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import channelReducer from "./channelReducer";
import { firebaseReducer } from "react-redux-firebase";
import messageReducer from "./messageReducer";
import collaborateReducer from "./collaborateReducer";

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    project: ProjectReducer,
    auth: authReducer,
    message: messageReducer,
    channel: channelReducer,
    collaborate: collaborateReducer,
    firebase: firebaseReducer,
});
export default rootReducer;
