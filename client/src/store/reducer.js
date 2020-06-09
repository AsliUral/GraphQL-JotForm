import { format } from "graphql-formatter";
import gql from "graphql-tag";

const redux = require("redux");
const reactRedux = require("react-redux");

const initialState = {
    codeGraphql: "",
    codeJS: {},
    queryText: "",
    currentQuery: gql`
        {
            ${`queryText`}
        }
    `,
    queryHistory: [],
    xPosition: 300,
    querymark: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === "ONCHANGEGRAPHQL") {
        return {
            ...state,
            codeGraphql: action.val,
        };
    }
    if (action.type === "PRETTIFYGRAPHQL") {
        return {
            ...state,
            codeGraphql: format(state.codeGraphql),
        };
    }
    if (action.type === "RESULTOFPLAY") {
        return {
            ...state,
            queryText: state.codeGraphql,
            currentQuery: gql`
                ${state.codeGraphql}
            `,
            queryHistory: [...state.queryHistory, state.codeGraphql + " \n"],
        };
    }
    if (action.type === "SETQUERYRESULT") {
        return {
            ...state,
            codeJS: action.val,
        };
    }
    if (action.type === "SETXPOSITION") {
        return {
            ...state,
            xPosition: action.val,
        };
    }
    if (action.type === "ADDMARKQUERY") {
        return {
            ...state,
            querymark: [...state.querymark, state.codeGraphql + " \n"],
        };
    }

    return state;
};

export default reducer;
