'use strict';

module.exports = function() {
    var serviceProviders = [
        './test/testServiceProvider'
    ];

    for (var i = 0; i < serviceProviders.length; i++) {
        require(serviceProviders[i])();
    }
}