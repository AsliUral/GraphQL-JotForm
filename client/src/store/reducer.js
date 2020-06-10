import { format } from "graphql-formatter";
import gql from "graphql-tag";

const initialState = {
    result: {},
    query: "",
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
    if (action.type === "ONCHANGEQUERY") {
        return {
            ...state,
            query: action.val,
        };
    }
    if (action.type === "PRETTIFYQUERY") {
        return {
            ...state,
            query: format(state.query),
        };
    }
    if (action.type === "RESULTOFPLAY") {
        return {
            ...state,
            query: state.query,
            currentQuery: gql`
                ${state.query}
            `,
            queryHistory: [...state.queryHistory, state.query + " \n"],
        };
    }
    if (action.type === "SETQUERYRESULT") {
        return {
            ...state,
            result: action.val,
        };
    }
    if (action.type === "ADDMARKQUERY") {
        return {
            ...state,
            queryMark: [...state.queryMark, state.query + " \n"],
        };
    }
    if (action.type === "ONSETSIDEBAROPEN") {
        return {
            ...state,
            sidebarOpen: action.val,
        };
    }
    if (action.type === "PINSIDEBAR") {
        return {
            ...state,
            sidebarDocked: action.val,
        };
    }
    return state;
};

export default reducer;
