'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  author: Schema.Types.ObjectId,
  body: String,
  comments: [Schema.Types.ObjectId],
  topic: [Schema.Types.ObjectId],
  timestamp: Date
});

PostSchema
  .virtual('less')
  .get(function () {
    return this.body.substring(0, 100);
  })


module.exports = mongoose.model('Post', PostSchema);