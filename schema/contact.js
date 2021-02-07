const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString } = require("graphql");
const { ContactModel, UserContactModel } = require("../model/contact");
const contacts = require("../object/contact");
const users = require("../object/user");

const queries = new GraphQLObjectType({
    name: 'Query',
    description: "All Contact Query",
    fields: () => ({
        contacts: {
            type: new GraphQLList(ContactModel),
            description: "Get All Contacts",
            resolve: () => contacts
        },
        user: {
            type: UserContactModel,
            description: "Get User by phone or email",
            args: {
                phone: {
                    type: GraphQLString,
                },
                email: {
                    type: GraphQLString,
                },
            },
            resolve: (_, args) => {
                let contact = contacts.find(c => (c.phone == args.phone || c.email == args.email))
                if(contact == null){
                    return null
                }
                
                return users.find(u => u.id == contact.userId)
            }
        }
    })
})

const schema = new GraphQLSchema({
    name: "ContactSchema",
    query: queries
})

module.exports = schema