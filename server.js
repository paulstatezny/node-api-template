var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 80 });

require('./src/services')(server);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});