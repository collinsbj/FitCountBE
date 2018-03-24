exports.up = function(knex, Promise) {
  return knex.schema.createTable("userdata", data => {
    data.string("userName");
    data.string("password");
    data.integer("totalFitCount");
    data.decimal("gymLat", null);
    data.decimal("gymLon", null);
    data.string("gymName");
    data.string("firstName");
    data.string("lastName");
    data.string("email");
    data.json("fitCountHistory");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("userdata");
};
