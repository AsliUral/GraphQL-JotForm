import { format } from "graphql-formatter";
import gql from "graphql-tag";
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
                query: state.query,
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
                queryMark: [...state.queryMark, state.query + " \n"],
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
    }
    return state;
};

export default reducer;
