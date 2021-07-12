var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({ message: 'hello from the backend!' });
});

module.exports = router;
