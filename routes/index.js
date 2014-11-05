var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// load schema
require('../models/article');
var Articles = mongoose.model('Article');

/* GET home page. */
router.get('/articles', function(req, res) {


	Articles.find().limit(1000).exec(function(err, docs) {
		res.render('index', {
			title: 'Swig Template Title',
			docs: docs
		});
	});

});

function setLimit(limit) {
	return limit;
}

module.exports = router;
