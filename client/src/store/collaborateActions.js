export const SETCODE = "SETCODE";
export const ONCHANGE = "ONCHANGE";

export const setCode = (value, auth) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        var connectedRef = firebase.database().ref(".info/connected");
        var database = firebase.database().ref().child("code-sessions");

        var uid = auth.uid;

        var DatabaseRef = firebase.database().ref("/code-sessions/" + uid);

        var isOnlineForDatabase = {
            code: value.code,
            cursorPosition: value.position,
        };

        DatabaseRef.set({
            isOnlineForDatabase,
        });
    };
};

export const onChange = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: ONCHANGE, val: value });
    };
};
