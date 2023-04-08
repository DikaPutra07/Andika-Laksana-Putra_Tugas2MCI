const { db_name } = require("./environment");
const { db_user } = require("./environment");
const { db_pass } = require("./environment");
const { db_host } = require("./environment");
const { db_port } = require("./environment");

module.exports = {
  "development": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  },
  "test": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  },
  "production": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  }
}
