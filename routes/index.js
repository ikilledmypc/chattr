var express = require('express');
var router = express.Router();
var messageServer = require("../messageServer/messageServer.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.post("/", function (req,res) {
  messageServer.newMessage(req.body.message);
  res.send("ok");
});

module.exports = router;
