var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

		var url = req.url;

		switch(url) {
			case '/':
					getPage(res, 'index.html','text/html');
					break;
			case '/login': getPage(res,'login.html','text/html');
					break;

					default:

					res.writeHead(404,{'Content-Type':'text/plain'});
					res.end("Page not found");
		}
}).listen(8080);



function getPage(response, filePath, contentType) {

			fs.readFile(filePath, function(error, data){
					if(error) {
						response.writeHead(500,{'Content-Type':'text/plain'});
						response.end("file not found");
					}

					if(data) {
							response.writeHead(200,{'Content-Type':'text/html'});
							response.end(data);

					}


			})
}





