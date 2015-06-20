'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./post.controller');

router.get('/getPosts', controller.getPosts);
router.post('/create', controller.create);

module.exports = router;