/*
DO NOT MODIFY THIS PAGE
*/

var Batch = function(marbleNumber, weight){
  this.used = 0;

  if ([0,1,2,3,4,5,6,7,8,9,10,11].indexOf(marbleNumber) === -1){
    console.error('first argument must be marble from 0 to 11');
    return;
  } else if (weight !== 'heavier' && weight !== 'lighter'){
    console.error('2nd argument has to be "heavier" or "lighter"');
    return;
  } 

  var hidden= [50,50,50,50,50,50,50,50,50,50,50,50];

  // modify specified marble
  if (weight === 'heavier'){
    hidden[marbleNumber] = 51;
  } else if (weight === 'lighter'){
    hidden[marbleNumber] = 49;
  }

  var duplicatesExist = function(input){
    var lib = {};
    for (var i = 0; i < input.length; i++){
      if (lib[input[i]]){
        return true;
      } else {
        lib[input[i]] = true;
      }
    }
    return false;
  }

  var overlap = function(inputA, inputB){
    var lib = {};
    for (var i = 0; i < inputA.length; i++){
      lib[inputA[i]] = true;
    }
    for (var i = 0; i < inputB.length; i++){
      if (lib[inputB[i]]){
        return true;
      }
    }
    return false;
  }

  var numbersZeroToEleven = function(inputA, inputB){
    lib = 'asdfasdfasdf';
    for (var i = 0; i < inputA.length; i++){
      if (lib[inputA[i]] === undefined){
        return false;
      }
    }
    for (var i = 0; i < inputB.length; i++){
      if (lib[inputB[i]] === undefined){
        return false;
      }
    }
    return true;
  }

  this.weigh = function(left, right){

    if (this.used === 3){
      console.error('you have exceeded three calls to Batch.weigh');
      return;
    }

    this.used++;

    // error handling on left and right inputs
    if (!(Array.isArray(left) && Array.isArray(right))){
      console.error('inputs have to both be arrays');
      return;
    } else if (left.length !== right.length){
      console.error('inputs have to be of the same size');
      return;
    } else if (duplicatesExist(left)){
      console.error('cannot have the same marble duplicaed in your left arg');
    } else if (duplicatesExist(right)){
      console.error('cannot have the same marble duplicaed in your right arg');
    } else if (overlap(left, right)){
      console.error('cannot have same marble on both sides of scale');
    } else if (!numbersZeroToEleven(left, right)){
      console.error('left and right array marbles must be numbered 0 to 11')
    }

    var leftWeight = left.reduce(function(sum, index){return sum + hidden[index]}, 0);
    var rightWeight = right.reduce(function(sum, index){return sum + hidden[index]}, 0);

    // console.log('[LEFT, RIGHT]: ', [leftWeight, rightWeight]);
    if (leftWeight === rightWeight){
      return [2, 2];
    } else if (leftWeight > rightWeight){
      return [3, 2];
    } else if (rightWeight > leftWeight){
      return [2, 3];
    }
  }
}


module.exports = Batch;