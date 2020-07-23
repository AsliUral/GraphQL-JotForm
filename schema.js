const axios = require("axios");
const fs = require("fs");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean,
    buildSchema,
    printSchema,
} = require("graphql");

let schemaObj = {
    User: null,
};

const UserFormType = new GraphQLObjectType({
    name: "UserFormType",
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        type: { type: GraphQLString },
        last_submission: { type: GraphQLString },
        status: { type: GraphQLString },
        height: { type: GraphQLInt },
        count: { type: GraphQLInt },
    }),
});

const UserFormschema = new GraphQLSchema({
    query: UserFormType,
});
const val = printSchema(UserFormschema);
schemaObj = { ...schemaObj, UserForm: val };

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        username: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        time_zone: { type: GraphQLString },
        account_type: { type: GraphQLString },
        status: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        website: { type: GraphQLString },
        company: { type: GraphQLString },
        folderLayout: { type: GraphQLString },
        language: { type: GraphQLString },
        avatarUrl: { type: GraphQLString },
        userForm: {
            type: new GraphQLList(UserFormType),
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/forms?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
    }),
});

const UserTypeschema = new GraphQLSchema({
    query: UserType,
});
const valUserType = printSchema(UserFormschema);
schemaObj = { ...schemaObj, User: valUserType };

const data = JSON.stringify(schemaObj);
let check = true;

// if (check) {
//     fs.writeFileSync("graphqlSchema.json", data);
//     console.log("JSON data is saved.");
//     check = false;
//     return;
// }

const UserUsageType = new GraphQLObjectType({
    name: "UserUsage",
    fields: () => ({
        submissions: { type: GraphQLInt },
        ssl_submissions: { type: GraphQLInt },
        payments: { type: GraphQLInt },
        uploads: { type: GraphQLInt },
    }),
});

const UserSubmissionsType = new GraphQLObjectType({
    name: "UserSubmissions",
    fields: () => ({
        id: { type: GraphQLString },
        form_id: { type: GraphQLString },
        ip: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        status: { type: GraphQLString },
        new: { type: GraphQLString },
        flag: { type: GraphQLString },
        userForm: {
            type: new GraphQLList(UserFormType),
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/forms?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
    }),
});

const permissions = new GraphQLObjectType({
    name: "permissions",
    fields: () => ({
        type: { type: GraphQLString },
        resource_id: { type: GraphQLString },
        access_type: { type: GraphQLString },
        title: { type: GraphQLString },
    }),
});

const UserSubusersType = new GraphQLObjectType({
    name: "UserSubusers",
    fields: () => ({
        owner: { type: GraphQLString },
        status: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        created_at: { type: GraphQLString },
        permissions: { type: GraphQLList(permissions) },
    }),
});

const UserHistoryType = new GraphQLObjectType({
    name: "UserHistory",
    fields: () => ({
        type: { type: GraphQLString },
        formID: { type: GraphQLString },
        username: { type: GraphQLString },
        formTitle: { type: GraphQLString },
        formStatus: { type: GraphQLString },
        ip: { type: GraphQLString },
        timestamp: { type: GraphQLInt },
    }),
});

const UserReportType = new GraphQLObjectType({
    name: "UserReport",
    fields: () => ({
        id: { type: GraphQLString },
        form_id: { type: GraphQLString },
        title: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        fields: { type: GraphQLString },
        list_type: { type: GraphQLString },
        status: { type: GraphQLString },
        url: { type: GraphQLString },
        isProtected: { type: GraphQLBoolean },
    }),
});

const UserSettingType = new GraphQLObjectType({
    name: "UserSetting",
    fields: () => ({
        username: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        website: { type: GraphQLString },
        time_zone: { type: GraphQLString },
        account_type: { type: GraphQLString },
        status: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        usage: { type: GraphQLString },
        industry: { type: GraphQLString },
        securityAnswer: { type: GraphQLString },
        company: { type: GraphQLString },
        doNotClone: { type: GraphQLString },
        webhooks: { type: GraphQLString },
        avatarUrl: { type: GraphQLString },
    }),
});

const subfolders = new GraphQLObjectType({
    name: "subfolders",
    fields: () => ({
        id: { type: GraphQLString },
        path: { type: GraphQLString },
        owner: { type: GraphQLString },
        name: { type: GraphQLString },
        parent: { type: GraphQLString },
        color: { type: GraphQLString },
    }),
});

const UserFolderType = new GraphQLObjectType({
    name: "UserFolders",
    fields: () => ({
        id: { type: GraphQLString },
        path: { type: GraphQLString },
        owner: { type: GraphQLString },
        name: { type: GraphQLString },
        parent: { type: GraphQLString },
        color: { type: GraphQLString },
        subfolders: { type: GraphQLList(subfolders) },
        userForm: {
            type: new GraphQLList(UserFormType),
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/forms?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
    }),
});

/* FORM ENDPOINT REQUEST*/

const formType = new GraphQLObjectType({
    name: "form",
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        title: { type: GraphQLString },
        height: { type: GraphQLString },
        url: { type: GraphQLString },
        status: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        new: { type: GraphQLString },
        count: { type: GraphQLString },
    }),
});

const formQuestionsType = new GraphQLObjectType({
    name: "formQuestions",
    fields: () => ({
        hint: { type: GraphQLString },
        labelAlign: { type: GraphQLString },
        name: { type: GraphQLString },
        order: { type: GraphQLString },
        qid: { type: GraphQLString },
        readonly: { type: GraphQLString },
        required: { type: GraphQLString },
        shrink: { type: GraphQLString },
        size: { type: GraphQLString },
        text: { type: GraphQLString },
        type: { type: GraphQLString },
        validationtype: { type: GraphQLString },
        userForm: {
            type: new GraphQLList(UserFormType),
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/forms?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
    }),
});

/* SUBMISSONS ENDPOINT REQUEST*/

const submissionAnswer = new GraphQLObjectType({
    name: "submissionAnswer",
    fields: () => ({
        text: { type: GraphQLString },
        type: { type: GraphQLString },
        answer: { type: GraphQLString },
    }),
});

const submissionsType = new GraphQLObjectType({
    name: "submissions",
    fields: () => ({
        id: { type: GraphQLString },
        form_id: { type: GraphQLString },
        ip: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        status: { type: GraphQLString },
        new: { type: GraphQLString },
        answers: { type: submissionAnswer },
    }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(`https://api.jotform.com/user?apiKey=` + args.apiKey)
                    .then((res) => res.data.content);
            },
        },
        userForm: {
            type: new GraphQLList(UserFormType),
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/forms?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
        userUsage: {
            type: UserUsageType,
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/usage?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
        userSubmissions: {
            type: new GraphQLList(UserSubmissionsType),
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/submissions?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
        userSubusers: {
            type: UserSubusersType,
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/subusers?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
        userHistory: {
            type: new GraphQLList(UserHistoryType),
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/history?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },

        userFolders: {
            type: UserFolderType,
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/folders?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
        userReports: {
            type: UserReportType,
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/reports?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
        userSettings: {
            type: UserSettingType,
            args: {
                apiKey: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/user/settings?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
        form: {
            type: formType,
            args: {
                apiKey: { type: GraphQLString },
                formID: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/form/${args.formID}?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
        formQuestions: {
            type: formQuestionsType,
            args: {
                apiKey: { type: GraphQLString },
                formID: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/form/${args.formID}/questions?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => {
                        res.data.content;
                    });
            },
        },
        submission: {
            type: submissionsType,
            args: {
                apiKey: { type: GraphQLString },
                submissionID: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                return axios
                    .get(
                        `https://api.jotform.com/submission/${args.submissionID}?apiKey=` +
                            args.apiKey
                    )
                    .then((res) => res.data.content);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
