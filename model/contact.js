const UserModel = require("./user")
const users = require("../object/user")
const { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} = require("graphql")
const contacts = require("../object/contact")

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
    })
})

module.exports = ContactModel