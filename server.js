/* global __dirname */
/* global process */

/**
 * Module dependencies
 */
var express = require('express'),
    http = require('http'),
    path = require('path');

var port = 8000;

// enforce correct environment settings
var envs = ['development', 'staging', 'production'];
if (envs.indexOf(process.env.NODE_ENV) < 0) {
    throw new Error('Node should be started with NODE_ENV set to one of:' + envs.join(','));
}

var app = module.exports = express();
var server = http.createServer(app);
// all environments

app.use(express.static(path.join(__dirname, '/bower_components/')));
app.use(express.static(__dirname + '/app'));
app.use('/', function (req, res, next) {
    res.sendFile(__dirname + '/app/index.html');
});

app.get('/status', (req, res, next) => {
    res.send('Sever is running.');
    res.end();
});

/**
* Start Server
*/
server.listen(port, function () {
    console.log('Server listening on port ' + port);
});
