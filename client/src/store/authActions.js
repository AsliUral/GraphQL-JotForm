import { firestore } from "firebase";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SETSIGNPASSWORDVALUE = "SETSIGNPASSWORDVALUE";
export const SETSIGNEMAILVALUE = "SETSIGNEMAILVALUE";
export const SETSIGNFIRSTNAMEVALUE = "SETSIGNFIRSTNAMEVALUE";
export const SETSIGNLASTNAMEVALUE = "SETSIGNLASTNAMEVALUE";

export const signIn = (credentials, auth) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: "LOGIN_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "LOGIN_ERROR", err });
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: "SIGNOUT_SUCCESS" });
            });
    };
};

//Firebase :sign a new user auth service by firebase
//Firestore :communicate with firestore database

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((resp) => {
                return firestore
                    .collection("users")
                    .doc(resp.user.uid)
                    .set({
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        initials: newUser.firstName[0] + newUser.lastName[0],
                        email: newUser.email,
                    });
            })
            .then(() => {
                dispatch({ type: "SIGNUP_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "SIGNUP_ERROR", err });
            });
    };
};

export const setSignPasswordValue = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETSIGNPASSWORDVALUE, val: value });
    };
};

export const setSignEmailValue = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETSIGNEMAILVALUE, val: value });
    };
};

export const setSignFirstNameValue = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETSIGNFIRSTNAMEVALUE, val: value });
    };
};

export const setSignLastNameValue = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETSIGNLASTNAMEVALUE, val: value });
    };
};
