exports.up = function(knex, Promise) {
  return knex.schema.createTable("userdata", data => {
    data.increments("id");
    data.string("placeholder");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("userdata");
};
