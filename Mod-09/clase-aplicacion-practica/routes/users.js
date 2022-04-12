const express = require("express");
const router = express.Router();

const { User } = require("../database/models/");

router.get("/", (req, res) => {
  return res.render("login");
})

router.post("/get-by-email", async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email }
  });

  if (user) {
    return res.json({
      status: "error",
      message: "User already exist"
    })
  }

  return res.json({
    status: "ok",
    message: "User is not in our DB"
  })
})

router.post("/", async (req, res) => {
  const users = await User.findAll({});
  return res.json(users);
})

module.exports = router;