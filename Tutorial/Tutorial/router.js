function route (handlers, pathname, response, postData) {
	console.log('About to route a request for ' + pathname);
	if (typeof handlers[pathname] === 'function') {
		return handlers[pathname](response, postData);
	} else {
		console.log('No request handler for ' + pathname);
		var content = '404 Not found!';
		response.writeHead(200, { 'ConetentType' : 'text/plain' });
		response.write(content);
		response.end();
	}
}

exports.route = route;