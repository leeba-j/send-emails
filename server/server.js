const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const cors = require('cors');
dotEnv.config();
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const { connectDatabase } = require('./database')

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)
app.use(cors());

app.use('api/grapql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

connectDatabase(MONGO_URL)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})