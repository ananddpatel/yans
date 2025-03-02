import knex from "knex";
import { resolve } from "path";

const dbFiles: Record<string, string> = {
  development: "db-dev.sqlite3",
  production: "db-prod.sqlite3",
  test: "db-test.sqlite3",
};

export const db = knex({
  client: "sqlite3",
  connection: {
    filename: resolve(__dirname, `../`, dbFiles[process.env.APPENV!!]),
  },
  useNullAsDefault: true,
});
