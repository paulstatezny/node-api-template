'use strict';

var Joi     = require('joi');
var Promise = require('promise');

var Model = function() {};

Model.prototype.schema = {};

Model.prototype.getSchema = function() {
    return this.schema;
};

Model.prototype.getSchemaKeys = function() {
    return Object.keys(this.schema);
};

Model.prototype.validate = function(obj) {
    model = this;
    return new Promise(function(resolve, reject){
        Joi.validate(obj, model.schema, function (err, value) {
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }
        });
    });
};

module.exports = Model;
