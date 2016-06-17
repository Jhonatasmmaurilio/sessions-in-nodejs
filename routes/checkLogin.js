var express = require('express');
var router = express.Router();
var session = require('express-session');

router.post('/checkLogin', function (req, res, next) {
	var sess = req.session;
	
	//Checks if post name and password exist
	if (req.body.name && req.body.password) {
		sess.name = req.body.name;
		sess.password = req.body.password;

		res.redirect('/index');
	}else{
		req.flash('error', "Error when trying make login, please try again!");
		res.redirect('/login');
	}
});

module.exports = router;