var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail App' });
});

router.get('/send', function(req, res, next) {
  axios.post(process.env.API+'/api/mail', req.query)
  .then(function (response) {
    console.log('sended');
    res.render('result', { title: 'Express' });
  })
  .catch(function (error) {
    res.render('error', { error: error.response });
  });
});

module.exports = router;
