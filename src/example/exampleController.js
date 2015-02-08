'use strict';

var exampleController = function exampleController() {}

exampleController.prototype.get = function(request, reply) {
    reply('hey what\'s up');
}

module.exports = new exampleController();