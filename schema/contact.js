const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require("graphql");
const ContactModel = require("../model/contact");
const contacts = require("../object/contact");
const queries = new GraphQLObjectType({
    name: 'Query',
    description: "All Contact Query",
    fields: () => ({
        contacts: {
            type: new GraphQLList(ContactModel),
            resolve: () => contacts
        }
    })
})

const schema = new GraphQLSchema({
    query: queries
})

module.exports = schema