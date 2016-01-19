var restify = require('restify');

var ArticleManager = require('./articleManager').ArticleManager;
var articleManager = new ArticleManager();

function getAll(req, res, next) {
   articleManager.listArticles(req.query.category).then(function (articles) {
     if (articles) {
         res.send(articles);
     } else {
         res.send(404);
     }
     next();
   });
}

function create(req, res, next) {
    articleManager.addArticle(req.body).then(function (r) {
      //res.setHeader('Location', req.url + "/" + req.body.Id);
      res.send(201);
      next();
    }).catch(function (e) {
      if (e.name === "BadRequestError") {
        res.send(400, e.message);
      } else {
        res.send(500, e.message);
      }
      next();
    });
}

/* Initialize server and routes */
var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get('/articles', getAll);
server.post('/articles', create);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
