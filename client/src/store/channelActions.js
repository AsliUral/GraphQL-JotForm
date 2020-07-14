export const SETCLOSEMODAL = "SETCLOSEMODAL";
export const SETOPENMODAL = "SETOPENMODAL";
export const SETCHANNELNAMEVALUE = "SETCHANNELNAMEVALUE";
export const SETCHANNELDETAILSVALUE = "SETCHANNELDETAILSVALUE";
export const ADDCHANNELS = "ADDCHANNELS";
export const SETCURRENTCHANNEL = "SETCURRENTCHANNEL";
export const ADDONLINE = "ADDONLINE";

export const setCloseModal = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETCLOSEMODAL, val: value });
    };
};

export const setOpenModal = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETOPENMODAL, val: value });
    };
};

export const setChannelNameValue = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETCHANNELNAMEVALUE, val: value });
    };
};

export const setChannelDetailsValue = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETCHANNELDETAILSVALUE, val: value });
    };
};

export const setCurrentChannel = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETCURRENTCHANNEL, val: value });
    };
};

export const addChannel = (value) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        firestore
            .collection("channels")
            .add({
                channelName: value.channelName,
                channelDetails: value.channelDetails,
                channelOwner: profile,
            })
            .then(() => {
                dispatch({ type: ADDCHANNELS, val: value });
            });
    };
};

export const addOnline = (value, auth) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        var connectedRef = firebase.database().ref(".info/connected");
        var database = firebase.database().ref().child("status");

        let statusArr = [];
        database.on("value", (snap) => {
            statusArr.push(snap.val());
        });

        var uid = auth.uid;

        var userStatusDatabaseRef = firebase.database().ref("/status/" + uid);
        var userStatusFirestoreRef = firestore.doc("/status/" + uid);

        var isOfflineForDatabase = {
            state: false,
            last_changed: firebase.database.ServerValue.TIMESTAMP,
            email: auth.email,
            uid: auth.uid,
        };

        var isOnlineForDatabase = {
            state: true,
            last_changed: firebase.database.ServerValue.TIMESTAMP,
            email: auth.email,
            uid: auth.uid,
        };

        var isOfflineForFirestore = {
            state: false,
            last_changed: firestore.FieldValue.serverTimestamp(),
            email: auth.email,
            uid: auth.uid,
        };

        var isOnlineForFirestore = {
            state: true,
            last_changed: firestore.FieldValue.serverTimestamp(),
            email: auth.email,
            uid: auth.uid,
        };

        connectedRef.on("value", async function (snap) {
            if ((await snap.val()) === true) {
                userStatusDatabaseRef
                    .onDisconnect()
                    .set(isOfflineForDatabase)
                    .then(function () {
                        userStatusDatabaseRef.set(isOnlineForDatabase);
                        userStatusFirestoreRef.set(isOnlineForFirestore);
                    });
            } else {
                userStatusFirestoreRef.set(isOfflineForFirestore);
                firestore
                    .collection("status")
                    .where("uid", "==", auth.uid)
                    .get()
                    .then(function (querySnapshot) {
                        querySnapshot.forEach(function (doc) {
                            firestore
                                .collection("status")
                                .doc(doc.id)
                                .update({ state: false });
                        });
                    });
                return;
            }
        });
    };
};
