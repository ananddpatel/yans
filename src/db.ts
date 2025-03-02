import knex from 'knex';
import { resolve } from 'path';

const dbFiles: Record<string, string> = {
  dev: 'db-dev.sqlite3',
  prod: 'dev-prod.sqlite3',
};

export const db = knex({
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, `../`, dbFiles[process.env.ENV!!]),
  },
  useNullAsDefault: true,
});
