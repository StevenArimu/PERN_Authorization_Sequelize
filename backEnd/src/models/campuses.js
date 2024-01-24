const db = require("../config/db");
const Sequelize = require("sequelize");

const Campuses = db.define(
  "campuses",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: "o",
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: Sequelize.BLOB("large"),
  },
  {
    timestamps: true,
  }
);
Campuses.sync({ alter: true });

module.exports = Campuses;
