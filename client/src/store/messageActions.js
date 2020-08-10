export const SENDMESSAGE = "SENDMESSAGE";
export const SETCHANNELMESSAGEVALUE = "SETCHANNELMESSAGEVALUE";
export const SENDMESSAGEERROR = "SENDMESSAGEERROR";
export const SETTYPING = "SETTYPING";
export const REMOVETYPING = "REMOVETYPING";
export const SETEMOJIPICKER = "SETEMOJIPICKER";

export const sendMessage = (value, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        if (value) {
            const firestore = getFirestore();
            const profile = getState().firebase.profile;
            const channel = getState().channel.currentChannel;
            const currentUser = {
                firstName: profile.firstName,
                initial: profile.initials,
                lastName: profile.lastName,
                avatar: profile.avatar,
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
            firestore
                .collection("typing")
                .where("uid", "==", id)
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        doc.ref
                            .delete()
                            .then(() => {
                                console.log("Document successfully deleted!");
                            })
                            .catch(function (error) {
                                console.error(
                                    "Error removing document: ",
                                    error
                                );
                            });
                    });
                });
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

export const setEmojiPicker = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETEMOJIPICKER, val: value });
    };
};

export const setTyping = (value) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        var connectedRef = firebase.database().ref(".info/connected");
        connectedRef.on("value", async function (snap) {
            if (snap.val() === true) {
                let objArr = [];
                const db = await firebase.firestore();
                db.settings({ timestampsInSnapshots: true });
                await db
                    .collection("typing")
                    .get()
                    .then((snapshot) => {
                        snapshot.DE.docs.forEach((doc) => {
                            let items = doc.data().proto.mapValue.fields;
                            objArr.push(items);
                        });
                        function uidExists(uid) {
                            return objArr.some(function (el) {
                                return el.uid.stringValue === uid;
                            });
                        }
                        if (!uidExists(value.uid)) {
                            firestore
                                .collection("typing")
                                .add({
                                    channelName: value.channelName,
                                    channelId: value.channelid,
                                    uid: value.uid,
                                })
                                .then(() => {
                                    dispatch({
                                        type: SETTYPING,
                                        val: value,
                                    });
                                });
                        }
                    });
            }
        });
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
