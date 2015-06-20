'use strict';

var Post = require('./post.model');

module.exports = {

	create: function (req, res) {
		Post.create(req.body, function (err, post) {
	    if (err) { return res.status(500).send(err); }
	    return res.status(201).json(post);
	  });
	},

	getPosts: function (req, res) {
		Post.find(req.body, function (err, posts) {
			if (err) { return res.status(500).send(err); }
			
			var retVal = [];
			posts.map(function (post) {
				retVal.push({
					title: post.title,
					less: post.less,
					author: post.author,
					timestamp: post.timestamp
				});
			});
	    	return res.status(200).json(retVal);
		});
	}
};