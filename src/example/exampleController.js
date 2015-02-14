'use strict';

var exampleController = function exampleController() {}

exampleController.prototype.get = function(request, reply) {
    reply('Example controller');
}

module.exports = new exampleController();
