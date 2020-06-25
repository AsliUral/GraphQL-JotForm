const axios = require("axios");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
} = require("graphql");

//User Type
// User Form Type
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
                        `https://api.jotform.com/user/forms?apiKey=e8d6edf1b4b67670c947ede51ba14398`
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
                    .get(
                        `https://api.jotform.com/user?apiKey=e8d6edf1b4b67670c947ede51ba14398`
                    )
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
                        `https://api.jotform.com/user/forms?apiKey=e8d6edf1b4b67670c947ede51ba14398`
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
                        `https://api.jotform.com/user/usage?apiKey=e8d6edf1b4b67670c947ede51ba14398`
                    )
                    .then((res) => res.data.content);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
