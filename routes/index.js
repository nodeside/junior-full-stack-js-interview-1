var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// load schema
require('../models/article');
var Articles = mongoose.model('Article');

/* GET home page. */
router.get('/articles', function(req, res) {

	Articles.find().limit(10).exec(function(err,docs) {

		console.log(docs);
		res.render('index', { title: 'Swig Template Title', docs:docs });
	});
  
});

module.exports = router;
