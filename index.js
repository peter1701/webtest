var http = require('http');

http.createServer(function(request,response){

    response.writeHead(200);


    response.end('<h1> Output test 2</h1>');

}).listen(8080);