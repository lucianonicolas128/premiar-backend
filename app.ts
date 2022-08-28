import { Application } from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import Routes from './routes/routes';

export default class Server {
    constructor(app: Application) {
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-entity-key, x-entity-token, x-entity-secret, Authorization");
            next();
        });

        this.config(app);
        new Routes(app);
    }

    public config(app: Application): void {
        app.use(bodyParser.json()); //Convert the data submitted from a form into a JSON format
        app.use(cors());
    }
}