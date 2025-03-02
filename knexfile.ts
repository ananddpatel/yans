import type { Knex } from "knex";
import { resolve } from "path";

// Update with your config settings.
const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: resolve(__dirname, "./db-dev.sqlite3"),
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  test: {
    client: "sqlite3",
    connection: {
      filename: resolve(__dirname, "./db-test.sqlite3"),
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: resolve(__dirname, "./db-prod.sqlite3"),
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = config;
