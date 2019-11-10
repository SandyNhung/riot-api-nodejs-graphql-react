import express from 'express';
import cors from 'cors';
import express_graphql from 'express-graphql';
import schema from './schema/schema';

//Create an express server and a GraphQL endpoint
const app = express();

//allow cors cross-origin requests
app.use(cors());

app.use(
    '/graphql',
    express_graphql({
        schema,
        graphiql: true
    })
);

app.listen(4000, () =>
    console.log('Express GraphQL Serve Now running on localhost:4000/graphql')
);
