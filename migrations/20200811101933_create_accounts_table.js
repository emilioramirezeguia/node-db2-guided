// records the change to the db schema
exports.up = function (knex) {
  // id, name, email. the id is the primary key, auto-increment the id automatically.
  // the return is critical, without it, the migration would fail
  return knex.schema.createTable("accounts", (table) => {
    // primary key
    table.increments("id");
    // make the name unique(no duplicates allowed), also required
    table.string("name", 256).notNullable().unique();
    table.string("email", 256);
  });
};
// describes how to undo the changes from the up() function
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("accounts");
};
