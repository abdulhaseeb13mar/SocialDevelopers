const express = require("express");
const router = express.Router();

//@Route    GET api/posts/profile
//@desc     profile post route
//@access   public

router.get("/test", (req, res) => res.json({ msg: "profile works" }));

module.exports = router;
