const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const cors = require('cors');
dotEnv.config();
const { graphqlHTTP } = require('express-graphql');
const { connectDatabase } = require('./database');
const schema = require('./GQL/GQLSchema');

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL

app.use(cors());

app.use('/api/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

connectDatabase(MONGO_URL)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})