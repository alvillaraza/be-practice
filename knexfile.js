// Update with your config settings.

module.exports = {

  //configuration for development environment
  development: {
    client: 'sqlite3', //database driver
    connection: {
      filename: './database/food.db3' //which file am I using? You can edit this with your own filename
    },
    useNullAsDefault: true // required for SQLite only
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },


    //configuration for production environment db connection
  production: {
    client: 'postgresql',
    connection: {
      host: "postgresql://pgontheweb.com",
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
