const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require("graphql")
const { ContactModel } = require("../model/contact")
const contacts = require("../object/contact")
const users = require("../object/user")

const mutation = new GraphQLObjectType({
    name: "ContactMutation",
    description: "Contact Mutation",
    fields: () => ({
        addContact: {
            type: ContactModel,
            args: {
                id: {
                    type: GraphQLNonNull(GraphQLInt)
                },
                phone: {
                    type: GraphQLNonNull(GraphQLString)
                },
                email: {
                    type: GraphQLNonNull(GraphQLString)
                },
            },
            resolve: (_, args) => {
                let user = users.find(u => u.id == args.id)
                if(user == null){
                    return null
                }

                let newContact = {
                    userId: args.id,
                    phone: args.phone,
                    email: args.email
                }
                contacts.push(newContact)
                return newContact
            }
        },
        deleteContact: {
            type: GraphQLInt,
            args: {
                id: {
                    type: GraphQLNonNull(GraphQLInt)
                },
                userId: {
                    type: GraphQLNonNull(GraphQLInt)
                }
            },
            resolve: (_, args) => {
                let user = users.find(u => u.id == args.userId)
                if(user == null){
                    return null
                }

                let contact = contacts.filter(c => c.userId == user.id)
                if(contact.length == 0){
                    return null
                }

                contact.splice(args.id - 1, 1)
                return args.id
            }
        },
        deleteAllContact: {
            type: GraphQLInt,
            args: {
                userId: {
                    type: GraphQLNonNull(GraphQLInt)
                }
            },
            resolve: (_, args) => {
                let user = users.find(u => u.id == args.userId)
                if(user == null){
                    return null
                }

                let currentContact = contacts
                contacts.forEach((v,i) => {
                    if(v.userId == args.userId){
                        currentContact.splice(i, 1)
                    }
                })
                contacts.splice(0, contacts.length-1)
                contacts.values = currentContact
                return args.userId
            }
        }
    })
})

module.exports = mutation