const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const secretKey = process.env.jwtSecret;

const logOut = (req, res) => {
  res.json({ msg: "create" });
};
// const login = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     console.log("EMAIL ERROR");
//     return res.status(400).json({
//       msg: "email or password are not exist",
//     });
//   }
//   const user = await User.findOne({
//     where: { email: email },
//   });
//   const userJson = user.toJSON();
//   console.log("FINDING USER", user);
//   try {
//     if (!user) {
//       res.status(404).json({ msg: "user does not existed" });
//     } else {
//       bcrypt
//         .compare(password, userJson.password)
//         .then((result) => {
//           if (result) {
//             const payload = {
//               id: userJson.user_id,
//               email: userJson.email,
//               password: userJson.password,
//             };
//             const token = jwt.sign(payload, secretKey, { expiresIn: 3600 });
//             res.status(200).json({
//               msg: "User login successfully",
//               token,
//               userJson,
//             });
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(404).json({ msg: "password is not match" });
//         });
//     }
//   } catch (error) {
//     console.log("ERROR");
//     res.status(404).json({ msg: "login Failed", err: error });
//   }
// };
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("EMAIL ERROR");
    return res.status(400).json({
      msg: "email or password are not exist",
    });
  }
  const user = await User.findOne({
    where: { email: email },
  });
  const userJson = user ? user.toJSON() : null;
  try {
    if (!user) {
      res.status(404).json({ msg: "user does not exist" });
    } else {
      bcrypt
        .compare(password, userJson.password) // Use userJson instead of user
        .then((result) => {
          if (result) {
            const { password, ...userWithoutPassword } = userJson;
            const payload = {
              id: userWithoutPassword.user_id, // Use userJson instead of user
              email: userWithoutPassword.email, // Use userJson instead of user
            };
            const token = jwt.sign(payload, secretKey, { expiresIn: 3600 });
            res.status(200).json({
              msg: "User login successfully",
              token,
              user: userWithoutPassword,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({ msg: "password is not match" });
        });
    }
  } catch (error) {
    console.log("ERROR");
    res.status(404).json({ msg: "login Failed", err: error });
  }
};

module.exports = {
  logOut,
  login,
};
