const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql")
const UserModel = require("../model/user")
const users = require("../object/user")

const mutation = new GraphQLObjectType({
    name: "UserMutation",
    description: "User Mutation",
    fields: () => ({
        addUser: {
            type: UserModel,
            description: "Add new User",
            args: {
                name: {
                    type: GraphQLNonNull(GraphQLString),
                },
                fullname: {
                    type: GraphQLNonNull(GraphQLString),
                },
                stack: {
                    type: GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (_, args) => {
                let newUser = {
                    id: users.length + 1,
                    name: args.name,
                    fullname: args.fullname,
                    stack: args.stack
                }
                users.push(newUser)
                return newUser
            }
        },
        editUser: {
            type: UserModel,
            description: "Edit current user",
            args: {
                id: {
                    type: GraphQLNonNull(GraphQLInt),
                },
                name: {
                    type: GraphQLNonNull(GraphQLString),
                },
                fullname: {
                    type: GraphQLNonNull(GraphQLString),
                },
                stack: {
                    type: GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (_, args) => {
                let user = users.find(u => u.id == args.id)
                if(user == null){
                    return null
                }

                let newUser = {
                    id: args.id,
                    name: args.name,
                    fullname: args.fullname,
                    stack: args.stack
                }
                users[args.id - 1] = newUser
                return newUser
            }
        },
        deleteUser: {
            type: GraphQLInt,
            args: {
                id: {
                    type: GraphQLNonNull(GraphQLInt)
                }
            },
            resolve: (_, args) => {
                let user = users.find(u => u.id == args.id)
                if(user == null){
                    return null
                }

                users.splice(args.id - 1, 1)
                return args.id
            }
        }
    })
})

module.exports = mutation