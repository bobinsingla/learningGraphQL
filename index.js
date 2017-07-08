import express from 'express';
// before adding graphql API
import graphqlHTTP from 'express-graphql';
// after adding graphql api
import mongoose from 'mongoose';

//Later
import schema from './graphql'

const app = express();

mongoose.connect('mongodb://localhost/my_db');


app.get('/', (req, res) => {
  res.send('Hello World..');
});

// GraphQL API
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(3000, () => {
  console.log('GraphQL server running at port 3000...')
})
