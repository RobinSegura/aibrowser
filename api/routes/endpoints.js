// endpoints.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    "endpoints": [
      "/",
      "/users",
      "/items",
      "/subitems"
    ]
  });
});

module.exports = router;