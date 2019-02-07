let expect = require('chai').expect
let chunkArray = require('../index.js');


describe('chunkArray should take an array and a size (number) as argument then return a new array with the array split evenly with number of "size" elements in each one ', function () {

    it('chunkArray(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]', function() {
        expect(JSON.stringify(chunkArray(['a','b','c','d'], 2))).to.equal(JSON.stringify([["a", "b"], ["c", "d"]]))
    });

    it('chunkArray([0, 1, 2, 3, 4, 5], 3) should return [[[0, 1, 2], [3, 4, 5]]', function() {
        expect(JSON.stringify(chunkArray([0, 1, 2, 3, 4, 5], 3))).to.equal(JSON.stringify([[0, 1, 2], [3, 4, 5]]))
    });

    it('chunkArray([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]', function() {
        expect(JSON.stringify(chunkArray([0, 1, 2, 3, 4, 5], 2))).to.equal(JSON.stringify([[0, 1], [2, 3], [4, 5]]))
    });

    it('chunkArray([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]', function() {
        expect(JSON.stringify(chunkArray([0, 1, 2, 3, 4, 5], 4))).to.equal(JSON.stringify([[0, 1, 2, 3], [4, 5]]))
    });
});