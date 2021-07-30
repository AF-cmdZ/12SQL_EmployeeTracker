// get the client
import { config } from "dotenv";

config();
// create the connection to database
export default {
  host: "localhost",
  port: 3001,
  user: "root",
  password: process.env.DB_PASS,
  database: "employees_db",
};
