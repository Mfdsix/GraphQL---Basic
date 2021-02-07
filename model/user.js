const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = require("graphql")
const ContactModel = require("./contact")
const contacts = require("../object/contact")
const users = require("../object/user")

const UserModel = new GraphQLObjectType({
    name: 'UserModel',
    description: "User Model",
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString,
            resolve: (val) => "My name is " + val.name
        },
        fullname: {
            type: GraphQLString,
        },
        stack: {
            type: GraphQLString,
        },
        contacts: {
            type: new GraphQLList(ContactModel),
            resolve: (user) => contacts.filter(w => w.userId == user.id)
        }
    })
})

module.exports = UserModel