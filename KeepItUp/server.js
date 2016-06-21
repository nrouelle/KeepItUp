"use strict";
var express = require('express');
var routes = require('./routes/index');
var path = require('path');
var app = express();
app.get('/', function (req, res) {
    res.status(200).send('ok');
});
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Example app listening at port %s', port);
});
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
var stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
module.exports = server;
//# sourceMappingURL=server.js.map