console.log("Welcome to pdAndWebServer");
var http = require('http');
var finalhandler = require('finalhandler')
var connect = require('connect');
var serveStatic = require('serve-static');
var net = require('net');
 
var http2nsPort = 8001;
var webport = 8000;
var pdport = 8002;
 
var s = http.createServer();
var client = new net.Socket();


//HTTPREQUES TO SOCKET
client.connect(pdport, '127.0.0.1', function() {
	s.on('request', function(request, response) {
		response.setHeader('Access-Control-Allow-Origin', '*');
		response.setHeader('Access-Control-Request-Method', '*');
		response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
		response.setHeader('Access-Control-Allow-Headers', '*');
	    response.writeHead(200);
	    var body = [];
	    request.on('data', function(chunk) {
		  body.push(chunk);
		}).on('end', function() {
			body = Buffer.concat(body).toString();
			// at this point, `body` has the entire request body stored in it as a string
			console.log(body);
			console.log('Connected');
	   		client.write(body+';');
			response.write('ok');
			response.end();
		});
	});
});
	 
s.listen(http2nsPort);
console.log('Listening request to http://127.0.0.1:' + http2nsPort);



//HTTP STATIC SERVER
connect().use(
    serveStatic("public")
).use(function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:"+http2nsPort);
}).listen(webport);

console.log('Serving web to http://127.0.0.1:' + webport);



 
