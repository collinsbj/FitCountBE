const database = require("./database-connection");

module.exports = {
  list() {
    return database("userdata").select();
  },
  read(id) {
    return database("userdata")
      .select()
      .where("id", id)
      .first();
  },
  create(resolution) {
    return database("userdata")
      .insert(resolution)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, resolution) {
    return database("userdata")
      .update(resolution)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  delete(id) {
    return database("userdata")
      .delete()
      .where("id", id);
  }
};
