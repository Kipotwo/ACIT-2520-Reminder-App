const express = require("express");
const friend_ctl = require("../controller/friend_controller");
const router = express.Router();


router.get("/search", friend_ctl.search);
router.get("/show",friend_ctl.show);


module.exports = router;