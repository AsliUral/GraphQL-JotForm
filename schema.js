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
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        time_zone: { type: GraphQLString },
        account_type: { type: GraphQLString },
        status: { type: GraphQLString },
        loginToGetSubmissions: { type: GraphQLInt },
        pdf_designer_group: { type: GraphQLInt },
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
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
