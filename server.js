const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const basicSchema = require("./schema/basic")
const userSchema = require("./schema/user")
const app = express()

app.use("/graphql", graphqlHTTP({
    schema: basicSchema,
    graphiql: true,
}))
app.use("/user", graphqlHTTP({
    schema: userSchema,
    graphiql: true,
}))

app.listen(5000., () => {
    console.log("Server Running ...")
})