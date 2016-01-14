var Scale = function(marbleNumber, weight){
  this.used = 0;
  // this.marbles = [50,50,50,50,50,50,50,50,50,50,50,50];

  if (weight !== 'heavier' && weight !== 'lighter'){
    console.error('2nd argument has to be "heavier" or "lighter"');
    return;
  }
  var hidden= [50,50,50,50,50,50,50,50,50,50,50,50];
}

// Scale.prototype.set = function(marbleNumber, weight){
//   // weight should be 1 or 3
//   if (weight !== 49 && weight !== 51){
//     console.error('weight has to be 49 or 51');
//   }

//   // reset the marbles' weight to be all 50
//   this.marbles = [50,50,50,50,50,50,50,50,50,50,50,50];

//   // change the specified marble number
//   this.marbles[marbleNumber] = weight;

//   // reset the number of times the scale has been used
//   this.used = 0;
// }

Scale.prototype.weigh = function(left, right){

  // scale weight method can only be used three times
  if (this.used === 3){
    console.error('scale use has exceeded limit');
    return;
  }

  // both left and right should be arrays
  if (!(Array.isArray(left) && Array.isArray(right))){
    console.error('inputs have to both be arrays');
    return;
  } else if (left.length !== right.length){
    console.error('inputs have to be of the same size');
    return;
  }

  // set up counters for the weights
  var leftWeight = 0;
  var rightWeight = 0;

  var marbles = this.marbles;

  // weight the marbles against each other
  left.forEach(function(marbleIndex){
    leftWeight += marbles[marbleIndex];
  })
  right.forEach(function(marbleIndex){
    rightWeight += marbles[marbleIndex];
  })

  // increase scale usage count
  this.used++;

  // return which load is heavier or if they are equal
  if (leftWeight === rightWeight){
    return 'weightEqual'
  } else if (leftWeight > rightWeight){
    return 'leftHeavy'
  } else if (rightWeight > leftWeight){
    return 'rightHeavy'
  }


}

module.exports = Scale;