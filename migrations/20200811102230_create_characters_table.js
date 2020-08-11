exports.up = function (knex) {
  return knex.schema.createTable("characters", (table) => {
    table.increments("id");
    table.string("name", 256).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("characters");
};
