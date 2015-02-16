'use strict';

var exampleMapper = require('./exampleMapper');

var exampleController = function() {}

exampleController.prototype.get = function(request, reply) {
    reply('Example controller');
}

module.exports = new exampleController();
