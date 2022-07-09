const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const cors = require('cors');
dotEnv.config();
const { buildSchema} = require('graphql');
const { graphqlHTTP} = require('express-graphql');

const PORT = process.env.PORT;

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)
app.use(cors());

app.use('api/grapql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})