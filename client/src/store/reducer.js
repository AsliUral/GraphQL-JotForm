import { format } from "graphql-formatter";
import gql from "graphql-tag";
import { firestoreReducer } from "redux-firestore";
import * as actionTypes from "./actions";

const initialState = {
    result: {},
    query: "",
    error: {},
    errorHappen: false,
    apiKey: "",
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
    rootQueryCondition: false,
    userQueryCondition: false,
    userFormQueryCondition: false,
    userUsageQueryCondition: false,
    userSubmissionsQueryCondition: false,
    returnCondition: [],
    schemaObject: {
        RootQuery: {
            User: `user(apiKey: String):`,
            UserForm: `userForm(apiKey: String):`,
            UserUsage: `userUsage(apiKey: String):`,
            UserSubmissions: `userSubmissions(apiKey: String):`,
            UserSubusers: `userSubusers(apiKey: String):`,
            UserHistory: `userHistory(apiKey: String):`,
            UserFolders: `userFolders(apiKey: String):`,
            UserReports: `userReports(apiKey: String): `,
            UserSettings: `userSettings(apiKey: String):`,
            form: `form(apiKey: String, formID: String):`,
            formQuestion: `formQuestions(apiKey: String, formID: String):`,
            submission: `submission(apiKey: String, submissionID: String):`,
        },
        User: `
        username: String
        name: String
        email: String
        time_zone: String
        account_type: String 
        status: String 
        created_at: String
        updated_at: String
        website: String
        company: String
        folderLayout: String
        language: String
        avatarUrl: String`,
        UserForm: `
        id: String
        username: String
        type: String
        last_submission: String
        status: String
        height: Int
        count: Int`,
        UserUsage: `
        submissions: Int
        ssl_submissions: Int
        payments: Int
        uploads: Int`,
        UserSubmissions: `
        id: String
        form_id: String
        ip: String
        created_at: String
        updated_at: String
        status: String
        new: String
        flag: String`,
        UserSubusers: `
        owner: String
        status: String
        email: String
        username: String
        created_at: String
        permissions: [permissions]`,
        UserHistory: `
        type: String
        formID: String
        username: String
        formTitle: String
        formStatus: String
        ip: String
        timestamp: Int`,
        UserFolders: `
    id: String
    path: String
    owner: String
    name: String
    parent: String
    color: String
    subfolders: [subfolders]`,
        UserReports: `
        id: String
        form_id: String
        title: String
        created_at: String
        updated_at: String
        fields: String
        list_type: String
        status: String
        url: String
        isProtected: Boolean`,
        UserSettings: `
        username: String
        name: String
        email: String
        website: String
        time_zone: String
        account_type: String
        status: String
        created_at: String
        updated_at: String
        usage: String
        industry: String
        securityAnswer: String
        company: String
        doNotClone: String
        webhooks: String
        avatarUrl: String`,
        form: `
    id: String
    username: String
    title: String
    height: String
    url: String
    status: String
    created_at: String
    updated_at: String
    new: String
    count: String`,
        formQuestion: `
    hint: String
    labelAlign: String
    name: String
    order: String
    qid: String
    readonly: String
    required: String
    shrink: String
    size: String
    text: String
    type: String
    validationtype: String`,
        submission: `
    id: String
    form_id: String
    ip: String
    created_at: String
    updated_at: String
    status: String
    new: String
    answers: submissionAnswer`,
    },
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
        case actionTypes.UPDATERETURNCONDITION:
            return {
                ...state,
                returnCondition: action.val,
            };
        case actionTypes.HANDLERROOTQUERYCONDITIONUPDATE:
            return {
                ...state,
                rootQueryCondition: action.val,
                userQueryCondition: false,
                userFormQueryCondition: false,
                userUsageQueryCondition: false,
                userSubmissionsQueryCondition: false,
                userSubusersQueryCondition: false,
                userHistoryQueryCondition: false,
                userReportsQueryCondition: false,
                userSettingsQueryCondition: false,
                userFoldersQueryCondition: false,
                formQueryCondition: false,
                formQuestionQueryCondition: false,
                submissionQueryCondition: false,
                returnCondition: [
                    {
                        conditionName: "rootQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERUSERQUERYCONDITIONUPDATE:
            return {
                ...state,
                userQueryCondition: action.val,

                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "userQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERUSERFORMQUERYCONDITIONUPDATE:
            return {
                ...state,
                userFormQueryCondition: action.val,

                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "userFormQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERUSERUSAGEQUERYCONDITIONUPDATE:
            return {
                ...state,
                userUsageQueryCondition: action.val,

                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "userUsageQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERUSERSUBMISSONSQUERYCONDITIONUPDATE:
            return {
                ...state,
                userSubmissionsQueryCondition: action.val,
                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "userSubmissionsQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERUSERSUBUSERSQUERYCONDITIONUPDATE:
            return {
                ...state,
                userSubusersQueryCondition: action.val,
                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "userSubusersQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERUSERHISTORYQUERYCONDITIONUPDATE:
            return {
                ...state,
                userHistoryQueryCondition: action.val,
                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "userHistoryQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERUSERFOLDERSQUERYCONDITIONUPDATE:
            return {
                ...state,
                userFoldersQueryCondition: action.val,
                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "userFoldersQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERUSERREPORTSQUERYCONDITIONUPDATE:
            return {
                ...state,
                userReportsQueryCondition: action.val,
                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "userReportsQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERUSERSETTINGSQUERYCONDITIONUPDATE:
            return {
                ...state,
                userSettingsQueryCondition: action.val,
                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "userSettingsQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERFORMQUERYCONDITIONUPDATE:
            return {
                ...state,
                formQueryCondition: action.val,
                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "formQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERFORMQUERYQUESTIONCONDITIONUPDATE:
            return {
                ...state,
                formQuestionQueryCondition: action.val,
                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "formQuestionQueryCondition",
                        val: true,
                    },
                ],
            };
        case actionTypes.HANDLERSUBMISSIONCONDITIONUPDATE:
            return {
                ...state,
                submissionQueryCondition: action.val,
                returnCondition: [
                    ...state.returnCondition,
                    {
                        conditionName: "submissionQueryCondition",
                        val: true,
                    },
                ],
            };
    }
    return state;
};

export default reducer;
