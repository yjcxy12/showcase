/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Topic = require('../api/topic/topic.model');
var Post = require('../api/post/post.model');

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

Post.find({}).remove(function() {
  Post.create({
    title: 'Development Tools',
    body: 'A brilliant header, clean sidebar, and minimalist footer can go a long way towards making a blog look good.' +
          'But the one area that’s often overlooked in blog design is the post styling.' +
          'Here are 15 blog post areas that need styling and 30 great examples for you to draw inspiration from.' +
          'Once you’re inspired and in need of a web designer or developer, go to',
    author: User.findOne({email: 'test@test.com'})._id,
    timestamp: Date()
  }, {
    title: 'Server and Client integration',
    body: 'A brilliant header, clean sidebar, and minimalist footer can go a long way towards making a blog look good.' +
          'But the one area that’s often overlooked in blog design is the post styling.' +
          'Here are 15 blog post areas that need styling and 30 great examples for you to draw inspiration from.' +
          'Once you’re inspired and in need of a web designer or developer, go to',
    author: User.findOne({email: 'test@test.com'})._id,
    timestamp: Date()
  });
});