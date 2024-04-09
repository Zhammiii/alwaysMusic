import pg from "pg";
const { Pool } = pg;

const config = {
  user: "postgres",
  host: "localhost",
  database: "always Music",
  password: "aqui va tu clave",
  port: 5432,
};
export const pool = new Pool(config);
