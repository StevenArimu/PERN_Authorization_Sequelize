const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { Op } = require("sequelize");
const secretKey = process.env.jwtSecret;
const register = async (req, res) => {
  const { f_name, l_name, email, password } = req.body;
  try {
    bcrypt.hash(password, 10).then(async (hashPassword) => {
      const user = await User.create({
        f_name,
        l_name,
        email,
        password: hashPassword,
      })
        .then((user) => {
          const payload = {
            id: user.user_id,
            email: user.email,
            password: user.password,
          };
          const token = jwt.sign(payload, secretKey, { expiresIn: 3600 });
          user.save().then(() => {
            const userJson = user ? user.toJSON() : null;
            const { password, ...userWithoutPassword } = userJson;
            res.status(200).json({
              msg: "User Register Successfully",
              user: userWithoutPassword,
              token: token,
            });
          });
        })
        .catch((error) => {
          console.log(error.errors[0].message);
          res.status(404).json({ msg: error.message, why: error.errors[0] });
        });
    });
  } catch (error) {
    console.log(error.errors[0].message);
    res.status(404).json({ msg: error.message, why: error.errors[0] });
  }
};
const allUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({ msg: "All Users", users: users });
};

const findOne = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User found", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const destoryUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findByPk(id);
    user.destroy().then(() => {
      res.status(200).json({ msg: "User delete successfully", user });
    });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
const updateUser = async (req, res) => {
  const { id, f_name, l_name, email } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ msg: "User not exists" });
    }
    (user.f_name = f_name), (user.l_name = l_name), (user.email = email);
    user
      .save()
      .then((user) => {
        res.status(200).json({ msg: "User Update successfully", user: user });
      })
      .catch((error) => {
        console.log(error);
        res.status(404).json({ msg: "User Update Failed" });
      });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
module.exports = {
  register,
  allUsers,
  findOne,
  destoryUser,
  updateUser,
};
