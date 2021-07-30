// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  password: "scuscu7sql",
  database: "employees_db",
});

connection.connect((err) => {
  if (err) throw err;
});

connection.module.exports = connection;
