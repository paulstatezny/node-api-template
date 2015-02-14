'use strict';
var exampleController = require('./exampleController');

module.exports = function(server) {
    server.route({
        method: 'GET',
        path: '/example',
        handler: exampleController.get
    });
}
