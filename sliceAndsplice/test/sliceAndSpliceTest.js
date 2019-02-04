const expect = require('chai').expect;
const frankenSplice = require('../index.js');
console.log(frankenSplice([1,2,3], [4,5,6], 1));
console.log(typeof([ 4, 1, 2, 3, 5, 6 ]));
describe('frankenSplice takes arr2 and splices in Arr 1 at designate index of n', function() {
    it('frankenSplice([1,2,3], [4,5,6], 1) should return [4,1,2,3,5,6]', function () {
        //convert array to String to prevent array assignment error!
        expect(frankenSplice([1,2,3], [4,5,6], 1).toString()).to.equal('4,1,2,3,5,6')
    });
});