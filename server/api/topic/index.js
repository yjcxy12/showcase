'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./topic.controller');

router.get('/getAll', controller.getAll);
router.post('/create', controller.create);

module.exports = router;
