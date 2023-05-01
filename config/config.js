require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD, //probably null
    "database": process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "development": {
    "username": "conradquagliaroli",
    "password": null,
    "database": "agriculture_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "conradquagliaroli",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
