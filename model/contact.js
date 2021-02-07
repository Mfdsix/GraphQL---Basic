const users = require("../object/user")
const { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLScalarType,
    GraphQLList,
} = require("graphql")
const contacts = require("../object/contact")

const UserContactModel = new GraphQLObjectType({
    name: "UserContactModel",
    description: "User Contact Model",
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        fullname: {
            type: GraphQLString
        },
        stack: {
            type: GraphQLString,
        }
    })
})

const ContactModel = new GraphQLObjectType({
    name: "ContactModel",
    description: "Contact Model",
    fields: () => ({
        phone: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLInt,
        },
        user: {
            type: UserContactModel,
            resolve: (contact) => {
                return users.find(u => u.id == contact.userId)
            }
        }
    })
})

module.exports = ContactModel