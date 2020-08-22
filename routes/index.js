var express = require('express');
var router = express.Router();
var model = require('../models/model')
/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('url: ' + req.query['url']);
    console.log('format: ' + req.query['format']);
    if (req.query['url'] == undefined) {
        res.render('index', {title: 'Acceuil'});
    } else {
        model.dl(req.query['url'], req.query['format'], function (ko, ok) {
            console.log("ko = " + ko)
            console.log("ok = " + ok)
            res.send(ok);
        })
    }
});

router.get('/gestion', function (req, res, next) {
    model.gestion(function (ko,ok){
        res.redirect("/")
    })
});


module.exports = router;
