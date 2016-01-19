var MongoReadModel = require("./model/mongo/mongo-read-model").MongoReadModel;
var MongoWriteModel = require("./model/mongo/mongo-write-model").MongoWriteModel;
var readModel = new MongoReadModel();
var writeModel = new MongoWriteModel();

function ArticleManager () {}

ArticleManager.prototype.listArticles = function (category) {
    return readModel.getAll(category);
}

ArticleManager.prototype.addArticle = function (article) {
    return writeModel.addArticle(article);
}

exports.ArticleManager = ArticleManager;
