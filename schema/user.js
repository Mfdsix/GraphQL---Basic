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

const rootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        users: {
            type: new GraphQLList(UserModel),
            description: "List of Users",
            resolve: () => {
                let listUsers = users
                listUsers.forEach((v,i) => {
                    v.contacts = contacts.filter(c => c.userId == v.id)
                })
                return listUsers
            }
        }
    })
})

const schema = new GraphQLSchema({
    name: "UserSchema",
    query: rootQuery,
})

module.exports = schema