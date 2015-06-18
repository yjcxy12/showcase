/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Topic = require('../api/topic/topic.model');

Topic.find({}).remove(function() {
  Topic.create({
    name : 'Development Tools',
  }, {
    name : 'Server and Client integration',
  }, {
    name : 'Smart Build System',
  }, {
    name : 'Modular Structure',
  }, {
    name : 'Optimized Build',
  }, {
    name : 'Deployment Ready',
  }, {
    name : 'Programming',
  }, {
    name : 'Social',
  }, {
    name : 'Movies',
  }, {
    name : 'Books',
  }, {
    name : 'ACG',
  }, {
    name : 'Games',
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});