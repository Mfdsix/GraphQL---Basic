const UserModel = require("./user")
const users = require("../object/user")
const { 
    GraphQLObjectType, GraphQLInt, GraphQLString
} = require("graphql")

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
        user: {
            type: UserModel,
            resolve: (data) => users.find(user => user.id = data.userId)
        }
    })
})

module.exports = ContactModel