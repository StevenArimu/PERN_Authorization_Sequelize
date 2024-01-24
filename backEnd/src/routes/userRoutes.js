const {
  register,
  allUsers,
  findOne,
  destoryUser,
  updateUser,
} = require("../controller/userController");
const { Router } = require("express");
const router = new Router();

// router.get("/:id", findOne);
router.post("/id", findOne);
router.get("/", allUsers);
router.post("/destoryUser", destoryUser), router.post("/register", register);
router.put("/updateUser", updateUser);
module.exports = router;
