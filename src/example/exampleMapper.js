'use strict';

var util         = require('util');
var mapper       = require('../synapse/mapper');
var exampleModel = require('./exampleModel');

var exampleMapper = function() {};

util.inherits(exampleMapper, mapper);

module.exports = new exampleMapper();