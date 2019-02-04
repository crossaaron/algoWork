const expect = require('chai').expect;
const titleCase = require('../index.js');

describe('titleCase takes a string and Capitalizes only the first letter of each word', function() {
    it('titleCase("all we are is") should return "All We Are Is"', function() {
        expect(titleCase('all we are is')).to.equal("All We Are Is")
    });

    it('titleCase("HHHelloo ThERe Mr!") should return "All We Are Is"', function() {
        expect(titleCase('HHHelloo ThERe Mr!')).to.equal("Hhhelloo There Mr!")
    });

});