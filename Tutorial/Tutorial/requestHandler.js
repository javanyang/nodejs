function start(response, postData) {
	console.log("Request handler 'start' was called");
	
	var doc = '<!DOCTYPE>'
					+ '<html>'
						+ '<head>'
							+ '<meta charset="utf-8">'
							+ '<title>Node.js tutorial</title>'
						+ '</head>'
						+ '<body>'
							+ '<form action="/upload" method="post">'
								+ '<textarea name="text" style="width:300px;height:200px;margin:50px auto 0 auto;"></textarea>'
								+ '<input type="submit" value="Submit">'
							+ '</form>'
						+ '</body>' 
					+ '</html>';
	
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');
	response.write(doc, 'utf-8');
	response.end();
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called");
	var content = 'You\'ve send "' + postData + '".';
	response.writeHead(200, { 'ConetentType' : 'text/plain' });
	response.write(content);
	response.end();
}

exports.start = start;
exports.upload = upload;