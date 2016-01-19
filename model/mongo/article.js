var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  title: String,
  text: String,
  category: String
});

var Article = module.exports = mongoose.model('Article', articleSchema, 'articles');
