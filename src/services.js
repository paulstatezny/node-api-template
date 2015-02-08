'use strict';

module.exports = function() {
    var serviceProviders = [
        './example/exampleServiceProvider'
    ];

    for (var i = 0; i < serviceProviders.length; i++) {
        require(serviceProviders[i])();
    }
}