const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} = require("graphql")

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
        }
    })
})

module.exports = UserModel