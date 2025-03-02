import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.raw(
        `
            create table dummy_users
            (
                id         integer primary key,
                email      text unique not null,
                password   text        not null,
                created_at datetime    not null,
                updated_at datetime    not null
            );
        `
    )
}


export async function down(knex: Knex): Promise<void> {
}


