import { RedirrectAnalitic } from "@domain";
import { Column, CreatedAt, DataType, Index, Model, Sequelize, Table } from "sequelize-typescript";


interface ICreation {
    ip : string;
    shortUrl : string;
}

@Table({tableName : "analitic"})
export class RedirectAnaliticModel extends Model<RedirrectAnalitic,ICreation> {
    
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
    })
    id : string;

    @Column({
        type : DataType.STRING,
        allowNull : false,
        validate : {
            isIP : true
        }
    })
    ip : string;   

    @Index("short-url")
    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    shortUrl : string

    @CreatedAt
    @Column({
        type: DataType.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    })
    declare createdAt: Date;
    
}