import { RedirrectAnalitic } from "@domain";
import { Column, CreatedAt, DataType, Model, Sequelize, Table } from "sequelize-typescript";


interface ICreation {
    ip : string;
    shortUrl : string;
}

@Table({tableName : "redirect-analitic"})
export class RedirectAnaliticModel extends Model<RedirrectAnalitic,ICreation> {
    
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique : true,
        autoIncrement : true,
    })
    id : string;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    ip : string;   

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    shortUrl : string

    @CreatedAt
    @Column({
        type: DataType.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    })
    createdAt: Date;
    
}