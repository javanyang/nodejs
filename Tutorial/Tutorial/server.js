var http = require('http');
var url = require('url');

function start (route, handlers) {
	function onRequest(request, response) {
		var postData = '';
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received!');
		
		request.on('data', function (postDataChunk) {
			postData += postDataChunk;
			console.log('Received post data chunk "' + postDataChunk + '".');
		});
		
		request.on('end', function () {
			route(handlers, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(9999);
	console.log('Server has been started!');
}

exports.start = start;