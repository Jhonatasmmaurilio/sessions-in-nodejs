var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function (req, res, next) {
	var sess=req.session;
	
    sess.name;
    sess.password;
	
	res.render('login', {
		title: 'Login'
	});
});

module.exports = router;