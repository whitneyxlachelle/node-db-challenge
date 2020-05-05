
exports.up = function (knex) {
    return knex.schema
        .createTable("projects", (table) => {
            table.increments("id")
            table.text("project_name")
                .notNullable()
                .unique()
            table.text("description")
            table.boolean("completed")
                .notNullable()
                .defaultTo(false)
        })
        .createTable("tasks", (table) => {
            table.increments("id")
            table.text("description")
                .notNullable()
            table.text("notes")
            table.boolean("completed")
                .notNullable()
                .defaultTo(false)
            table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("resources", (table) => {
            table.increments("id")
            table.text("resource_name")
                .notNullable()
            table.text("description")
            table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("projects")
};
