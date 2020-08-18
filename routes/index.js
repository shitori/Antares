var express = require('express');
var router = express.Router();
var model = require('../models/model')
/* GET home page. */
router.get('/', function (req, res, next) {
    model.test("https://www.youtube.com/watch?v=PT7-JdKhzcU",function (status) {
        console.log(status)
        res.render('index', {title: 'Express'});
    })
});

module.exports = router;
