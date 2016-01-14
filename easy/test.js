var expect = require('chai').expect;
var Batch = require('./scale.js');
var findOddMarble = require('./main.js');

// Chai Test
var runTest = function(loc, weight){
  describe('Marble location <' + loc + '> and weight <' + weight + '>', function(){
    it('should return back the proper location <' + loc + '>', function(){
      var test = new Batch(loc, weight);
      expect(findOddMarble(test)).to.equal(loc, 'function failed with marble location <' + loc + '> and weight <' + weight + '>');
      
    })
  })
}

var marbleLocations = [0,1,2,3,4,5,6,7,8];

for (var i = 0; i < marbleLocations.length; i++){
  runTest(marbleLocations[i], 'heavier');
}



