const router = require("express").Router();
const User = require("../models/user");
const CryptoJs = require("crypto-js");
const { enc } = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.username,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const savedUser = await User.findOne({
      username: req.body.username,
    });
    !savedUser && res.status(401).json("User does not exist!");
    const password = CryptoJs.AES.decrypt(
      savedUser.password,
      process.env.PASS_SEC
    ).toString(enc.Utf8);
    if (password !== req.body.password) res.status(401).json("Wrong Password!");

    const accessToken = jwt.sign(
      { id: savedUser._id, isAdmin: savedUser.isAdmin },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );

    const { passwordd, ...others } = savedUser._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
