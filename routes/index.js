var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/index', function (req, res, next) {
	var sess = req.session;
	//Checks if session exist
	if (sess.name && sess.password) {
		req.flash("sucess", "Login sucess");
		res.render('index', {
			title: 'index',
			user: sess.name
		});
	} else {
		req.flash("error", "Please make login!");
		res.render('login', {
			title: 'Login'
		});
	}
});

module.exports = router;