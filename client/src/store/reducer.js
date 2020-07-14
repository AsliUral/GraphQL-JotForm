import { format } from "graphql-formatter";
import gql from "graphql-tag";
import { firestoreReducer } from "redux-firestore";
import * as actionTypes from "./actions";

const initialState = {
    result: {},
    query: "",
    error: {},
    errorHappen: false,
    currentQuery: gql`
        {
            ${`query`}
        }
    `,
    queryHistory: [],
    queryMark: [],
    sidebarOpen: false,
    sidebarDocked: false,
    tags: [],
    markedQueryPostHeader: "",
    modal: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ONCHANGEQUERY:
            return {
                ...state,
                query: action.val,
            };
        case actionTypes.PRETTIFYQUERY:
            return {
                ...state,
                query: format(state.query),
            };
        case actionTypes.RUNRESULT:
            return {
                ...state,
                query: format(state.query),
                currentQuery: gql`
                    ${state.query}
                `,
                queryHistory: [...state.queryHistory, state.query + " \n"],
            };
        case actionTypes.SETQUERYRESULT:
            return {
                ...state,
                result: action.val,
                errorHappen: false,
            };
        case actionTypes.SETQUERYERROR:
            return {
                ...state,
                error: action.val,
                result: action.val,
                errorHappen: true,
            };
        case actionTypes.ADDMARKQUERY:
            return {
                ...state,
            };
        case actionTypes.ONSETSIDEBAROPEN:
            return {
                ...state,
                sidebarOpen: action.val,
            };
        case actionTypes.PINSIDEBAR:
            return {
                ...state,
                sidebarDocked: action.val,
            };
        case actionTypes.RUNMARKEDQUERYFROMSOCIALQL:
            return {
                ...state,
                query: action.val,
            };
        case actionTypes.SETTAGQUERY:
            return {
                ...state,
                tags: [...action.val],
            };
        case actionTypes.SETHEADER:
            return {
                ...state,
                markedQueryPostHeader: action.val,
            };
        case actionTypes.SETOPENMODAL:
            return {
                ...state,
                modal: action.val,
            };
    }
    return state;
};

export default reducer;
