import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import DirectMessages from "../components/social/DirectMessages";
import firebase from "../config/fbConfig";
import { addOnline } from "../store/channelActions";

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        currentUser: state.firebase.profile,
        auth: state.firebase.auth,
        connectedRef: firebase.database().ref(".info/connected"),
        presenceRef: firebase.database().ref("presence"),
        usersRef: firebase.database().ref("users"),
        status: firebase.database().ref().child("status"),
        presence: state.firestore.ordered.presence,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOnline: (value, auth) => dispatch(addOnline(value, auth)),
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "users" }]),
    firestoreConnect([{ collection: "presence" }])
)(DirectMessages);

// database.on("value", snap => {
//     snap.val()
//   })
