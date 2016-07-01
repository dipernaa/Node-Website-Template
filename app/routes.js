// app/routes.js

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.render('index.ejs');
    });

  app.route('/404')
    .get(function(req, res) {
      res.render('404.ejs');
    });

  app.get('/*', function(req, res) {
    res.redirect('/404');
  });
};