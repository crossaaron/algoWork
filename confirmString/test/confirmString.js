let expect = require('chai').expect;
let confirmString = require('../index.js');

describe("Confirm String should take and array with 2 strings.  It will check the first string to evaluate if the letters in the second string are in it", function () {

    it('confirmString("Hello", "hey") should return false', function() {
        expect(confirmString('Hello', 'hey')).to.equal(false);
    });

    it('confirmString("Super", "repus") should return true', function() {
        expect(confirmString('Super', 'repus')).to.equal(true);
    });

    it('confirmString("qwertyipo6457", "pw6y") should return true', function() {
        expect(confirmString("qwertyipo6457", "pw6y").to.equal(true));
    })
});