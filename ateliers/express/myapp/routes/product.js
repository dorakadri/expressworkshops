var fs = require("fs");
var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
  fs.readFile("./pro.json", "utf8", function(err, data) {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.json(JSON.parse(data));
  });
});

module.exports = router;
