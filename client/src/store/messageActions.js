export const SENDMESSAGE = "SENDMESSAGE";
export const SETCHANNELMESSAGEVALUE = "SETCHANNELMESSAGEVALUE";
export const SENDMESSAGEERROR = "SENDMESSAGEERROR";
export const SETTYPING = "SETTYPING";
export const REMOVETYPING = "REMOVETYPING";

export const sendMessage = (value) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        if (value) {
            const firestore = getFirestore();
            const profile = getState().firebase.profile;
            const channel = getState().channel.currentChannel;
            const currentUser = {
                firstName: profile.firstName,
                initial: profile.initials,
                lastName: profile.lastName,
            };
            const message = {
                content: value,
                currrentChannel: channel.channelName,
                currentUser: currentUser,
                timestamp: new Date(),
            };
            let type = {
                channelName: channel.channelName,
                channelId: channel.channelid,
                uid: value.uid,
            };
            removeTyping(type);
            firestore
                .collection("messages")
                .add({
                    channelName: channel.channelName,
                    channelId: channel.id,
                    message: message,
                })
                .then(() => {
                    dispatch({ type: SENDMESSAGE, val: value });
                })
                .catch((err) => {
                    dispatch({ type: SENDMESSAGEERROR, err });
                });
        } else {
            dispatch({
                type: SENDMESSAGEERROR,
                val: { message: "Add a message" },
            });
        }
    };
};

export const setChannelMessageValue = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETCHANNELMESSAGEVALUE, val: value });
    };
};

export const setTyping = (value) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        const documentSnapshot = firestore
            .collection("typing")
            .doc(value.uid)
            .get();
        if (!documentSnapshot.exists) {
            firestore
                .collection("typing")
                .add({
                    channelName: value.channelName,
                    channelId: value.channelid,
                    uid: value.uid,
                })
                .then(() => {
                    dispatch({ type: SETTYPING, val: value });
                });
        }
    };
};

export const removeTyping = (value) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("typing")
            .where("uid", "==", value.uid)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    doc.ref
                        .delete()
                        .then(() => {
                            console.log("Document successfully deleted!");
                        })
                        .catch(function (error) {
                            console.error("Error removing document: ", error);
                        });
                });
            });
    };
};
