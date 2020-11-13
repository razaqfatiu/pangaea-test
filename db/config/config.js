require('dotenv').config()
const { DB_USER, PASSWORD, HOST, DB_PORT, DB } = process.env

module.exports = {
  development: {
    username: DB_USER || "root",
    password: PASSWORD ||  null,
    database: DB || "database_development",
    host: HOST || "127.0.0.1",
    port: DB_PORT || 5432,
    dialect: "postgres"
  }
}
