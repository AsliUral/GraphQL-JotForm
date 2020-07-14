export const ONCHANGEQUERY = "ONCHANGEQUERY";
export const PRETTIFYQUERY = "PRETTIFYQUERY";
export const RUNRESULT = "RUNRESULT";
export const SETQUERYRESULT = "SETQUERYRESULT";
export const SETQUERYERROR = "SETQUERYERROR";
export const ADDMARKQUERY = "ADDMARKQUERY";
export const ONSETSIDEBAROPEN = "ONSETSIDEBAROPEN";
export const PINSIDEBAR = "PINSIDEBAR";
export const RUNMARKEDQUERYFROMSOCIALQL = "RUNMARKEDQUERYFROMSOCIALQL";
export const SETTAGQUERY = "SETTAGQUERY";
export const SETHEADER = "SETHEADER";
export const SETOPENMODAL = "SETOPENMODAL";

export const prettifyQuery = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: PRETTIFYQUERY, val: value });
    };
};

export const onChangeQuery = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: ONCHANGEQUERY, val: value });
    };
};

export const runResult = () => {
    return (dispatch, getState) => {
        dispatch({ type: RUNRESULT });
    };
};

export const setQueryResult = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETQUERYRESULT, val: value });
    };
};

export const setQueryError = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETQUERYERROR, val: value });
    };
};
// add marked query to firebase but takes time (async)
export const addMarkQuery = (query, header, tag) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const email = getState().firebase.auth.email;
        const profile = getState().firebase.profile;
        const developerId = getState().firebase.auth.uid;
        firestore
            .collection("userMarkedQuery")
            .add({
                markedQuery: query,
                developerFirstName: profile.firstName,
                developerLastName: profile.lastName,
                developerId: developerId,
                developerEmail: email,
                createdAt: new Date(),
                header: header,
                tag: tag,
            })
            .then(() => {
                dispatch({ type: ADDMARKQUERY, query, header, tag });
            });
    };
};

export const onSetSideBarOpen = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: ONSETSIDEBAROPEN, val: value });
    };
};

export const pinSideBar = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: PINSIDEBAR, val: value });
    };
};

export const runMarkedQueryfromSocialQL = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: RUNMARKEDQUERYFROMSOCIALQL, val: value });
    };
};

export const setTagQuery = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETTAGQUERY, val: value });
    };
};

export const setPostHeader = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETHEADER, val: value });
    };
};

export const setOpenModal = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: SETOPENMODAL, val: value });
    };
};
