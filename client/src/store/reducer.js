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
    playButtonClick: false,
    queryHistoryArray: [],
    xPosition: 300,
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
            playButtonClick: true,
            queryText: state.codeGraphql,
            currentQuery: gql`
                ${state.codeGraphql}
            `,
            queryHistoryArray: [
                ...state.queryHistoryArray,
                state.codeGraphql + " \n",
            ],
        };
    }
    if (action.type === "SETQUERYRESULT") {
        return {
            ...state,
            playButtonClick: false,
            codeJS: action.val,
        };
    }
    if (action.type === "SETXPOSITION") {
        return {
            ...state,
            xPosition: action.val,
        };
    }
    return state;
};

export default reducer;
