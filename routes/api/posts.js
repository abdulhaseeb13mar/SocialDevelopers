const express = require("express");
const router = express.Router();

//@Route    GET api/posts/tests
//@desc     tests post route
//@access   public
router.get("/test", (req, res) => res.json({ msg: "posts works" }));

module.exports = router;
