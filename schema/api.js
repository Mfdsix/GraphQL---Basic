const { GraphQLInputObjectType, GraphQLList, GraphQLObjectType, GraphQLSchema } = require("graphql")
const ContactModel = require("../model/contact")
const UserModel = require("../model/user")
const contacts = require("../object/contact")
const users = require("../object/user")

const queries = new GraphQLObjectType({
    name: "ApiQuery",
    description: "Api Query",
    fields: () => ({
        users: {
            type: new GraphQLList(UserModel),
            resolve: () => users
        },
        contacts: {
            type: new GraphQLList(ContactModel),
            resolve : () => contacts
        }
    })
})

const schema = new GraphQLSchema({
    name: "ApiSchema",
    query: queries
})

module.exports = schema