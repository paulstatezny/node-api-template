'use strict';

var pg      = require('pg');
var Promise = require('promise');

var Mapper = function() {
    this.connectionString = 'postgres://postgres:synapse1@localhost/example_vm';
    this.connection       = null;
}

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


    // this.connect(this.connectionString).then(function(err, client, done) {
    //     if(err) {
    //         return console.error('error fetching client from pool', err);
    //     }


    // }, function(err){
    //     return console.error(error);
    // });

    // pg.connect(this.connectionString, function(err, client, done) {
    //     if(err) {
    //         return console.error('error fetching client from pool', err);
    //     } else {
    //         console.log("success");
    //         done();
    //     }
    //     // client.query('SELECT $1::int AS number', ['1'], function(err, result) {
    //     //     //call `done()` to release the client back to the pool
    //     //     done();

    //     //     if(err) {
    //     //         return console.error('error running query', err);
    //     //     }
    //     //     console.log(result.rows[0].number);
    //     //     //output: 1
    //     // });
    // });
};

module.exports = new Mapper();
