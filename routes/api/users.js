const express = require("express");
const router = express.Router();

//@Route    GET api/posts/users
//@desc     users post route
//@access   public

router.get("/test", (req, res) => res.json({ msg: "users works" }));

module.exports = router;
