import "reflect-metadata";
import express from 'express';
import cors from "cors";
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from "./container";
import { serverConfig } from "@config";
import { errorMiddleware } from './middlewares';
import { SequelizeClient } from '@infrastructure';      
import swaggerUi from 'swagger-ui-express'; 
import * as swaggerDocument from "./swagger.json";



async function bootstrap () {
    const server = new InversifyExpressServer(container);
    const port = serverConfig.port;

    server.setConfig((app) => {
        app.use(express.json());
        app.use(cors());
    });

    server.setErrorConfig( (app)=>{
        app.use(errorMiddleware);
    })

    const seq = container.get(SequelizeClient);
    const app = server.build();
    
    app.use('', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    

    app.listen(
        port, async () => {
            try {
                console.log(`Server is running at ${port}`);
            } catch(e) {
                console.log(e);
            }
        }
    );
}

export const start = async() => {
    await bootstrap();
}