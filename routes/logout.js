var express = require('express');
var router = express.Router();

router.get('/logout', function (req, res) {
	req.session.destroy(function (err) {
		if (err) {
			req.flash("error", "Something is wrong, please refresh this page! :(");
			console.log(err);
		} else {
			res.redirect('/');
		}
	});
});

module.exports = router;