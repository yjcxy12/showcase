'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
  name: String
});

TopicSchema
  .path('name')
  .validate(function (value, respond) {
    var self = this;
    this.constructor.findOne({ name: value }, function (err, topic) {
      if (err) { throw err; }
      if (topic) {
        return respond(false);
      }
      return respond(true);
    });
  }, 'topic already exists');


module.exports = mongoose.model('Topic', TopicSchema);