exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("userdata")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("userdata").insert([
        { id: 1, placeholder: "rowValue1" },
        { id: 2, placeholder: "rowValue2" },
        { id: 3, placeholder: "rowValue3" }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE userdata_id_seq RESTART WITH 4;");
    });
};
