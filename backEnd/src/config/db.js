const { Sequelize } = require("sequelize");
const db = new Sequelize("postgres://postgres:aaaaaa@localhost:5432/pern_auth");
// DataBase
// const db = new Sequelize({
//   dialect: process.env.driver,
//   host: process.env.host,
//   port: process.env.port,
//   database: process.env.database,
//   username: "postgres",
//   password: process.env.password, // uncomment and provide password if required
// });
const connnectDB = async () => {
  try {
    db.authenticate().then(() => {
      console.log("DB connected");
    });
  } catch (err) {
    console.log(err.message);
  }
};
connnectDB();
module.exports = db;
