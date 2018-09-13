var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ "isbn":"123442123, 97885654453443","title":"Learn how to build modern web application with MEAN stack","author": "Didin J.","description":"The comprehensive step by step tutorial on how to build MEAN (MongoDB, Express.js, Angular 5 and Node.js) stack web application from scratch","published_year":"2017","publisher":"Djamware.com" });
});

module.exports = router;
