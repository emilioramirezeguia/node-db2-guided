exports.up = function (knex) {
  return knex.schema
    .createTable("professions", (table) => {
      table.increments("id");
      table.string("name", 256).notNullable();
    })
    .createTable("tools", (table) => {
      table.increments("id");
      table.string("name", 256).notNullable();
    });
};

exports.down = function (knex) {};
