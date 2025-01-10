export const databaseConfig = {
    database: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dbPort: Number(process.env.DB_PORT),
    dialect: process.env.DIALECT,
    replica: {
        host: process.env.DB_HOST_REPLICA,
    }
}