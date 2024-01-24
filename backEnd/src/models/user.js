const db = require("../config/db");
const Sequelize = require("sequelize");

const User = db.define(
  "User",
  {
    user_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
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
      allowNull: false,
      unique: true,
      validator: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "o",
    },
  },
  {
    timestamps: true,
    logging: false,
    toJSON: {
      exclude: ["password"],
    },
  }
);
User.sync({ alter: true });
module.exports = User;
