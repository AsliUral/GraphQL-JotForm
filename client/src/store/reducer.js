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
        };
    }
    if (action.type === "SETQUERYRESULT") {
        return {
            ...state,
            playButtonClick: false,
            codeJS: action.val,
        };
    }
    return state;
};

export default reducer;
