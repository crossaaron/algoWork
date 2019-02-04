var expect = require("chai").expect;
var confirmEnding = require("../index.js");

describe("confirmEnding", function() {
    it("confirmEnding(Hello, llo) should return true",  function () {
        expect(confirmEnding("Hello", 'llo')).to.equal(true);
        console.log('hello');
    });

    it("confirmEnding(hello, wxy) should return false", function () {
        expect(confirmEnding('hello', 'wxy')).to.equal(false);
    });

    it("confirmEnding(hac24#$, 24#$) should return true", function() {
        expect(confirmEnding('hac24#$', '24#$')).to.equal(true);
    });

    it("confirmEnding(hef@#$%, !!!) should return false", function () {
        expect(confirmEnding('hef@#$%', '!!!')).to.equal(false)
    });
});

