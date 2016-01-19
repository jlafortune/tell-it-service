var db = require('./mongo-db');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Article = mongoose.model('Article');

var MongoWriteModel = function () {};

MongoWriteModel.prototype.addArticle = function(article) {
    // Save article to DB, but do not add duplicates
    return Article.find({"title" : article.title}).then(function (found) {
        if (found.length) {
            return new Promise(function (resolve, reject) {
                resolve(1); // Just return if the article already exists in DB
            });
        } else {
            var articleDoc = new Article(article);
            return articleDoc.save();
        }
    });
}

exports.MongoWriteModel = MongoWriteModel;
