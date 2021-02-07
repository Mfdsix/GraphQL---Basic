const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const basicSchema = require("./schema/basic")
const userSchema = require("./schema/user")
const contactSchema = require("./schema/contact")
const apiSchema = require("./schema/api")
const app = express()

app.use("/graphql", graphqlHTTP({
    schema: basicSchema,
    graphiql: true,
}))
app.use("/user", graphqlHTTP({
    schema: userSchema,
    graphiql: true,
}))
app.use("/contact", graphqlHTTP({
    schema: contactSchema,
    graphiql: true,
}))
app.use("/api", graphqlHTTP({
    schema: apiSchema,
    graphiql: true,
}))

app.listen(5000., () => {
    console.log("Server Running ...")
})