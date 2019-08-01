import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';
import * as Configs from './configs-db.json';

// Config
const APP_PORT = Configs.server_port;

const app = Express();

app.use('/graphiql', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));

app.listen(APP_PORT, () => {
    console.log(`App listening on port ${APP_PORT}`);
})