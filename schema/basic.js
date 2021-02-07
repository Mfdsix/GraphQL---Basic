const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require("graphql")

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Mfdsix",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: (parent, args) => "Hello Mfdsix"
            }
        })
    })
})

module.exports = schema