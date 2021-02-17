import * as express from 'express';
import { getEnvironmentVariables } from './environments/env';
import * as mongoose from 'mongoose';


import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import UserRouter from './routers/UserRouter';


export class Server {


    corsOptions: cors.CorsOptions = {
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization", "Access-Control-Allow-Headers"],
        credentials: true,
        methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        origin: '*',
        preflightContinue: false
    };
    public app: express.Application = express();

    constructor() {

        this.setConfigurations();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }

    setConfigurations() {


        this.connectMongoDb();
        this.configureBodyParser();

    }

    connectMongoDb() {

        const databaseUrl = getEnvironmentVariables().db_url;
        mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log('connected to database');


        });

    }

    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use('*', cors(this.corsOptions));
    }

    setRoutes() {

        this.app.use('/api/res', UserRouter);

    }

    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: 'Not Found',
                status_code: 404
            });
        })
    }

    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'Something Went Wrong. Please Try Again',
                status_code: errorStatus
            })
        })
    }
}