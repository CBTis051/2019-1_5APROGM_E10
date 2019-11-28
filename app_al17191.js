var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'content-Type': 'application/json; charset=utf-8'});

    var objeto = {
        mensaje : 'Hola mundo Node JS Repo GIT - Luis Carlos Chavez Tirado\n'
    };

    var json = JSON.stringify(objeto);

    res.end(json);
}).listen(8081);
console.log('Server running on port 8081');