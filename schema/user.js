const users = require("../object/user")
const contacts = require("../object/contact")
const UserModel = require("../model/user")
const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require("graphql")

const rootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        users: {
            type: new GraphQLList(UserModel),
            description: "List of Users",
            resolve: () => users
        }
    })
})

const schema = new GraphQLSchema({
    query: rootQuery,
})

module.exports = schema