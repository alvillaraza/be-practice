//the purpose of the migration file is to record all changes to the database schema

//the up() function describes the changes to apply to the database when the migration runs
exports.up = function(knex) {
  return knex.schema.createTable('menu_items', tbl => {
    //a primary key, called 'id', integer, autoincrementing
    tbl.increments();

    //.index makes searching by this column faster
    tbl.string('name', 512).notNullable().unique().index();

    tbl.decimal('price', 8, 2);

    //Relational databases store booleans as 1 (for true) and 0 (for false)
    tbl.boolean('available').defaultTo(false);
  })
};

//the down() function describes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('menu_items');
  
};
