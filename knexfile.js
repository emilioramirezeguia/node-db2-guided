// Update with your config settings.

module.exports = {
  // database configuration for development environment
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/game.db3", // update to point to the database file
    },
    useNullAsDefault: true,
  },
  // database configuration for staging/testing environment
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  // database configuration for production environment
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
