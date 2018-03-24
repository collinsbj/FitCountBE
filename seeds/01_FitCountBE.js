exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("userdata")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("userdata").insert([
        {
          userName: "bjcollins",
          password: "password123",
          totalFitCount: 1234,
          fitCountHistory: { "01-02-18": 45, "02-03-18": 35, "03-04-18": 55 },
          gymLat: 40.586194,
          gymLon: -105.043533,
          gymName: "Miramont Lifestyle Fitness - North",
          firstName: "BJ",
          lastName: "Collins",
          email: "CollinsBJ@me.com"
        }
      ]);
    });
};
