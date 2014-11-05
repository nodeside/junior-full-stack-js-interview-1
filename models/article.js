
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  updated: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  published: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Article', ArticleSchema);
