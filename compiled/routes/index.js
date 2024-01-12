var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World');
});

/* POST request to concatenate two words */
router.post('/concatenate', function(req, res, next) {
  var word1 = req.body.word1;
  var word2 = req.body.word2;
  var concatenated = word1 + word2 + ' done by post request';
  res.send(concatenated);
});

var app = express();
app.use('/', router);
app.listen(5000, function () {
  console.log('App listening on port 5000!');
});

module.exports = router;