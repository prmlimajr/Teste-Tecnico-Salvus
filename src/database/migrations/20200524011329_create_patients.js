
exports.up = function(knex) {
  return knex.schema.createTable('patients', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('age').notNullable();
    table.string('email').notNullable();
    table.string('phone_number').notNullable();
    table.string('address').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('patients');
};
