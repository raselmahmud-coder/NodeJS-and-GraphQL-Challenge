const { Client } = require("pg");
const connectionString = `postgres://ycnfspnh:bZJSgf3z9BqU14MTVVhpsrwrt5J6nLqQ@kesavan.db.elephantsql.com/ycnfspnh`;
const connection = new Client({
  connectionString,
});
// connection.connect()

module.exports = connection;
