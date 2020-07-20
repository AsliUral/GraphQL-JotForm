import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebase from "../config/fbConfig";

import { setCode, onChange } from "../store/collaborateActions";
import editorCollaborate from "../components/collaborate/editorCollaborate";

const mapStateToProps = (state) => {
    return {
        code: state.collaborate.code,
        cursorPosition: state.collaborate.cursorPosition,
        auth: state.firebase.auth,
        query: firebase.database().ref().child("code-sessions"),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCode: (value, auth) => dispatch(setCode(value, auth)),
        onChange: (value) => dispatch(onChange(value)),
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "code-sessions" }])
)(editorCollaborate);
