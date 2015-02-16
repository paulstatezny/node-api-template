'use strict';

var Joi     = require('joi');
var Promise = require('promise');
var util    = require('util');
var model   = require('../synapse/model');

var ExampleModel = function() {
    this.schema = {
        example_string : Joi.string().max(255),
        example_number : Joi.number().min(0).max(1000)
    };
};

util.inherits(ExampleModel, model);

module.exports = new ExampleModel();
