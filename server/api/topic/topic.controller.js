'use strict';

var Topic = require('./topic.model');

module.exports = {

	create: function (req, res) {
		Topic.create(req.body, function (err, topic) {
	    if (err) { return res.status(500).send(err); }
	    return res.status(201).json(topic);
	  });
	},

	getAll: function (req, res) {
		Topic.find({}, function (err, topicList) {
			if (err) { return res.status(500).send(err); }
	    	return res.status(200).json(topicList);
		});
	}
};