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
export const SEARCHTAG = "SEARCHTAG";
export const HANDLERRETURNCONDITION = "HANDLERRETURNCONDITION";
export const UPDATERETURNCONDITION = "UPDATERETURNCONDITION";
export const STARTQUERY = "STARQUERY";
export const HANDLERROOTQUERYCONDITIONUPDATE =
    "HANDLERROOTQUERYCONDITIONUPDATE";
export const HANDLERUSERQUERYCONDITIONUPDATE =
    "HANDLERUSERQUERYCONDITIONUPDATE";
export const HANDLERUSERFORMQUERYCONDITIONUPDATE =
    "HANDLERUSERFORMQUERYCONDITIONUPDATE";
export const HANDLERUSERUSAGEQUERYCONDITIONUPDATE =
    "HANDLERUSERUSAGEQUERYCONDITIONUPDATE";
export const HANDLERUSERSUBMISSONSQUERYCONDITIONUPDATE =
    "HANDLERUSERSUBMISSONSQUERYCONDITIONUPDATE";
export const HANDLERUSERSUBUSERSQUERYCONDITIONUPDATE =
    "HANDLERUSERSUBUSERSQUERYCONDITIONUPDATE";
export const HANDLERUSERHISTORYQUERYCONDITIONUPDATE =
    "HANDLERUSERHISTORYQUERYCONDITIONUPDATE";
export const HANDLERUSERFOLDERSQUERYCONDITIONUPDATE =
    "HANDLERUSERFOLDERSQUERYCONDITIONUPDATE";
export const HANDLERUSERREPORTSQUERYCONDITIONUPDATE =
    "HANDLERUSERREPORTSQUERYCONDITIONUPDATE";
export const HANDLERUSERSETTINGSQUERYCONDITIONUPDATE =
    "HANDLERUSERSETTINGSQUERYCONDITIONUPDATE";
export const HANDLERFORMQUERYCONDITIONUPDATE =
    "HANDLERFORMQUERYCONDITIONUPDATE";
export const HANDLERFORMQUERYQUESTIONCONDITIONUPDATE =
    "HANDLERFORMQUERYQUESTIONCONDITIONUPDATE";
export const HANDLERSUBMISSIONCONDITIONUPDATE =
    "HANDLERSUBMISSIONCONDITIONUPDATE";
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

export const searchTag = (value, queryMark) => {
    let filteredQueryMark = [];
    queryMark.filter((result) => {
        if (result.tag.includes(value)) {
            filteredQueryMark.push(result);
        }
    });
    return (dispatch, getState) => {
        dispatch({ type: SEARCHTAG, val: value, queryMark: filteredQueryMark });
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
                star: 1,
                starList: [developerId],
            })
            .then(() => {
                dispatch({ type: ADDMARKQUERY, query, header, tag });
            });
    };
};

export const starQuery = (query, star, starList) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const starCount = star + 1;
        const developerId = getState().firebase.auth.uid;
        const list = starList;
        firestore
            .collection("userMarkedQuery")
            .where("markedQuery", "==", query)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    firestore
                        .collection("userMarkedQuery")
                        .doc(doc.id)
                        .update({
                            star: starCount,
                            starList: [...list, developerId],
                        });
                });
            });
        return;
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
export const handlerConditionUpdate = (condition, value) => {
    return (dispatch, getState) => {
        if (condition == "rootQueryCondition") {
            dispatch({
                type: HANDLERROOTQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "userQueryCondition") {
            dispatch({
                type: HANDLERUSERQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "userFormQueryCondition") {
            dispatch({
                type: HANDLERUSERFORMQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "userUsageQueryCondition") {
            dispatch({
                type: HANDLERUSERUSAGEQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "userSubmissionsQueryCondition") {
            dispatch({
                type: HANDLERUSERSUBMISSONSQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "userSubusersQueryCondition") {
            dispatch({
                type: HANDLERUSERSUBUSERSQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "userHistoryQueryCondition") {
            dispatch({
                type: HANDLERUSERHISTORYQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "userFoldersQueryCondition") {
            dispatch({
                type: HANDLERUSERFOLDERSQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "UserReportsQueryCondition") {
            dispatch({
                type: HANDLERUSERREPORTSQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "userSettingsQueryCondition") {
            dispatch({
                type: HANDLERUSERSETTINGSQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "formQueryCondition") {
            dispatch({
                type: HANDLERFORMQUERYCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "formQuestionQueryCondition") {
            dispatch({
                type: HANDLERFORMQUERYQUESTIONCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
        if (condition == "submissionQueryCondition") {
            dispatch({
                type: HANDLERSUBMISSIONCONDITIONUPDATE,
                condition: condition,
                val: value,
            });
        }
    };
};

export const handlerReturnCondition = (value) => {
    const val = value.shift();
    val.val = true;
    return (dispatch, getState) => {
        dispatch({
            type: UPDATERETURNCONDITION,
            val: value,
        });
        if (val.conditionName == "rootQueryCondition") {
            dispatch({
                type: HANDLERROOTQUERYCONDITIONUPDATE,
                condition: val.conditionName,
                val: val.val,
            });
        }
        if (val.conditionName == "userQueryCondition") {
            dispatch({
                type: HANDLERUSERQUERYCONDITIONUPDATE,
                condition: val.conditionName,
                val: val.val,
            });
        }
        if (val.conditionName == "userFormQueryCondition") {
            dispatch({
                type: HANDLERUSERFORMQUERYCONDITIONUPDATE,
                condition: val.conditionName,
                val: val.val,
            });
        }
        if (val.conditionName == "userUsageQueryCondition") {
            dispatch({
                type: HANDLERUSERUSAGEQUERYCONDITIONUPDATE,
                condition: val.conditionName,
                val: val.val,
            });
        }
        if (val.conditionName == "userSubmissionsQueryCondition") {
            dispatch({
                type: HANDLERUSERSUBMISSONSQUERYCONDITIONUPDATE,
                condition: val.conditionName,
                val: val.val,
            });
        }
        if (val.conditionName == "userSubusersQueryCondition") {
            dispatch({
                type: HANDLERUSERSUBUSERSQUERYCONDITIONUPDATE,
                condition: val.conditionName,
                val: val.val,
            });
        }
        if (val.conditionName == "userHistoryQueryCondition") {
            dispatch({
                type: HANDLERUSERHISTORYQUERYCONDITIONUPDATE,
                condition: val.conditionName,
                val: val.val,
            });
        }
        if (val.conditionName == "UserReportsQueryCondition") {
            dispatch({
                type: HANDLERUSERREPORTSQUERYCONDITIONUPDATE,
                condition: val.conditionName,
                val: val.val,
            });
        }
    };
};
