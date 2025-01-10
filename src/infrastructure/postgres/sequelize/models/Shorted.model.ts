import { ShortUrl } from "@domain";
import { Column, CreatedAt, DataType, Model, Sequelize, Table } from "sequelize-typescript";

interface ICreationData {
    short : string;
    originalUrl : string;
    expiresAt? : Date;
}

@Table({tableName : "short"})
export class ShortedModel extends Model<ShortUrl, ICreationData> {
    

    @Column({
        type : DataType.STRING,
        unique : true,
        primaryKey : true,
    })
    short : string;

    @CreatedAt
    @Column({
        type: DataType.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    })
    declare createdAt: Date;

    @Column({
        type : DataType.STRING,
        allowNull : false,
        validate : {
            isUrl : true,
        },
    })
    originalUrl : string;
    
    @Column({
        type : DataType.INTEGER,
        defaultValue : 0,
    })
    clickCount : number;

    @Column({
        type : DataType.DATE,
        allowNull : true
    })
    expiresAt? : Date;
}
