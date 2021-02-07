const users = require("../object/user")
const UserModel = require("../model/user")
const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require("graphql")
const contacts = require("../object/contact")
const { ContactModel } = require("../model/contact")

const rootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        users: {
            type: new GraphQLList(UserModel),
            description: "List of Users",
            resolve: () => users
        },
        user: {
            type: UserModel,
            description: "Get One User",
            args: {
                id: {
                    type: GraphQLInt,
                }
            },
            resolve : (_, args) => users.find(u => u.id === args.id)
        },
        contact: {
            type: new GraphQLList(ContactModel),
            description: "Get All User Contacts",
            args: {
                userId: {
                    type: GraphQLInt,
                }
            },
            resolve: (_, args) => contacts.filter(c => c.userId == args.userId)
        }
    })
})

const schema = new GraphQLSchema({
    name: "UserSchema",
    query: rootQuery,
})

module.exports = schema