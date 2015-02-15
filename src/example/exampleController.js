'use strict';

var exampleController = function() {}

exampleController.prototype.get = function(request, reply) {
    reply('Example controller');
}

module.exports = new exampleController();
