const { login, logOut } = require("../controller/authController");
const { Router } = require("express");
const router = new Router();

router.get("/user", logOut);

router.post("/login", login);

module.exports = router;
