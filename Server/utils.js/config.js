require('dotenv').config();

module.exports.dbConfig = {
    host: process.env.API_HOST,
    user:  process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
}