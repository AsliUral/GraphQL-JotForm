const axios = require("axios");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
} = require("graphql");

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
        userform: {
            type: new GraphQLList(UserFormType),
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
        userform: {
            type: new GraphQLList(UserFormType),
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
                console.log(args);
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
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
