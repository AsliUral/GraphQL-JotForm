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
        connectedRef.on("value", function (snap) {
            if (snap.val() === true) {
                alert("connected");
                firestore
                    .collection("presence")
                    .where("uid", "==", auth.uid)
                    .get()
                    .then(function (querySnapshot) {
                        querySnapshot.forEach(function (doc) {
                            return firestore
                                .collection("presence")
                                .doc(doc.id)
                                .update({ status: true });
                        });
                    });

                // firestore.collection("presence").add({
                //     status: true,
                //     uid: auth.uid,
                //     email: auth.email,
                // });
            } else {
                alert("not connected");
                firestore
                    .collection("presence")
                    .where("uid", "==", auth.uid)
                    .get()
                    .then(function (querySnapshot) {
                        querySnapshot.forEach(function (doc) {
                            firestore
                                .collection("presence")
                                .doc(doc.id)
                                .update({ status: false });
                        });
                    });
            }
        });
    };
};
