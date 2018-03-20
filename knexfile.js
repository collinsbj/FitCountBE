module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///FitCountBE"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
