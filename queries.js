const database = require("./database-connection");

module.exports = {
  list() {
    return database("userdata").select();
  },
  read(username) {
    return database("userdata")
      .select()
      .where("username", username)
      .first();
  },
  create(data) {
    return database("userdata")
      .insert(data)
      .returning("*")
      .then(record => record[0]);
  },
  update(username, data) {
    return database("userdata")
      .update(data)
      .where("username", username)
      .returning("*")
      .then(record => record);
  },
  delete(username) {
    return database("userdata")
      .delete()
      .where("username", username);
  }
};
