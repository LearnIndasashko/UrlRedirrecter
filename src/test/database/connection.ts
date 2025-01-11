import { Sequelize } from "sequelize-typescript";
import {RedirectAnaliticModel} from "../../infrastructure/postgres/sequelize/models/RedirrectAnalitic.model"
import {ShortedModel} from "../../infrastructure/postgres/sequelize/models/Shorted.model"

export const sequelize = new Sequelize({
  
  dialect: 'sqlite',
  storage: ':memory:',
  logging : false,

  models: [ShortedModel,RedirectAnaliticModel],});

export const sync = async() => {
    await sequelize.sync({ force: true});
}