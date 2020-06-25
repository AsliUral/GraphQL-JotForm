import ProjectReducer from "./reducer";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    project: ProjectReducer,
    auth: authReducer,
    firebase: firebaseReducer,
});
export default rootReducer;
