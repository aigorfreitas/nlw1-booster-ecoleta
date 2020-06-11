import knex from 'knex';
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

export default connection;