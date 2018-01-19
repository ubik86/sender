var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.post('http://192.168.1.252:8080/api/mail', {
    email: 'boguslaw.tarnowski@intive.com',
    topic: 'test',
    message: 'its working'
  })
  .then(function (response) {
    console.log('sended');
  })
  .catch(function (error) {
    console.log(error);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
