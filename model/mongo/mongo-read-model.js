var db = require('./mongo-db');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Article = mongoose.model('Article');

var MongoReadModel = function () {};

MongoReadModel.prototype.getAll = function(category) {
    if (category) {
        return Article.find({"category" : category});
    } else {
        return Article.find();
    }
}

exports.MongoReadModel = MongoReadModel;
