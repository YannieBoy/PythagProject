/**
 * Created by yan on 5/22/17.
 */
var http = require('http');
var uc = require ('upper-case');
var events = require ('events');
var eventEmitter = new events.EventEmitter();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
}).listen(8080);