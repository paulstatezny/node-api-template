var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 80 });

require('./src/routes')(server);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
