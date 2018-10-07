const express = require("express");
const router = express.Router();

// @route GET api/profile/test
// @desc Tests profile route
// @access Publick
router.get("/test", (req, res) => res.json({ msg: "profile Works" }));

module.exports = router;
