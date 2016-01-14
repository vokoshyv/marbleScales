var expect = require('chai').expect;
var Batch = require('./scale.js');
var findOddMarble = require('./main.js');

// Chai Test
var runTest = function(loc, weight){
  describe('Marble location <' + marbleLocations[i] + '> and weight <' + marbleWeights[j] + '>', function(mar){
    it('should return back the proper location <' + marbleLocations[i] + '>', function(){
      var test = new Batch(loc, weight);
      expect(findOddMarble(test)).to.equal(loc, 'function failed with marble location <' + loc + '> and weight <' + weight + '>');
      
    })
  })
}

var marbleLocations = [0,1,2,3,4,5,6,7,8,9,10,11];
var marbleWeights = ['heavier', 'lighter'];

for (var i = 0; i < marbleLocations.length; i++){
  for (var j = 0; j < marbleWeights.length; j++){
    runTest(marbleLocations[i], marbleWeights[j]);
  }
}



