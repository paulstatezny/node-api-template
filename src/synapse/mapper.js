'use strict';

var pg      = require('pg');
var Promise = require('promise');

var Mapper = function() {
    this.connectionString = 'postgres://postgres:synapse1@localhost/example_vm';
};

Mapper.prototype.query = function(query) {
    var mapper = this;
    return new Promise(function (resolve, reject) {
        pg.connect(mapper.connectionString, function(err, client, done) {
            if(err) {
                reject(err);
            } else {
                client.query(query, function(err, result) {
                    done();

                    if(err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    });
};

module.exports = Mapper;
