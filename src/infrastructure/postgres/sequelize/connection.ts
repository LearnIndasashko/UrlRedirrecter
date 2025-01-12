import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { injectable } from 'inversify';

import {ShortedModel,RedirectAnaliticModel} from './models';
import { databaseConfig } from '@config';

@injectable()
export class SequelizeClient {
    

    private client: Sequelize
    constructor(
   ) {
   
        this.client = new Sequelize({
            port : databaseConfig.port,
            database : databaseConfig.database,
            dialect : "postgres",
            username : databaseConfig.username,
            password : databaseConfig.password,
            host : databaseConfig.host,

            models: [ShortedModel,RedirectAnaliticModel],
            logging: false,
        });

        this.client.sync().then(async()=>{ 
            console.log("Connected sequelize singleton");
        }).catch((e)=> {
            console.log(JSON.stringify(e));
            console.log("Not connected");
        });
    }

    public getClient(): Sequelize {
       return this.client;
   }
}