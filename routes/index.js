var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/send', function(req, res, next) {
  axios.post('http://192.168.1.252:8080/api/mail', 
    req.query
  // {
  //   email: 'boguslaw.tarnowski@intive.com',
  //   topic: 'test',
  //   message: 'its working'
  // }
  )
  .then(function (response) {
    console.log('sended');
    res.render('result', { title: 'Express' });
  })
  .catch(function (error) {
    console.log(error);
  });
});

module.exports = router;
