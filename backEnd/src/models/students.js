const db = require("../config/db");
const Sequelize = require("sequelize");

const Students = db.define(
  "students",
  {
    f_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    l_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validator: {
        isEmail: true,
      },
    },
    imageUrl: {
      type: Sequelize.STRING,
      defalutValue: "o",
    },
  },
  {
    timestamps: true,
  }
);
Students.sync({ alter: true });

module.exports = Students;
