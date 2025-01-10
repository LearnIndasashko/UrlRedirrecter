import { ShortUrl } from "@domain";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICreationData {
    short : string;
    originalUrl : string;
    expiresAt? : Date;
    alias? : string;
}

@Table({tableName : "short"})
export class ShortedModel extends Model<ShortUrl, ICreationData> {
    

    @Column({
        type : DataType.STRING,
        unique : true,
        primaryKey : true,
        validate : {
            max : 6,
            min : 6,
        },
    })
    short : string;


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

    @Column({
        type : DataType.STRING,
        unique : true,
        validate : {
            max : 20,
            isUrl : true,
        },
        allowNull : true
    })
    alias? : string;
}
