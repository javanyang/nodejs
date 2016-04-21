var http = require('http');
var url = require('url');

function start (route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received!');
		
		route(pathname);

		response.writeHead(200, { 'ConetentType' : 'text/plain' });
		response.write('Hello world!');
		response.end();
	}

	http.createServer(onRequest).listen(9999);
	console.log('Server has been started!');
}

exports.start = start;