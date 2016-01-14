/*

Of Marbles and Scales - EASY MODE

***The problem: You have a 8 marbles of equal weight and one
that is either heavier. Your goal, using a balance scale is 
to find that odd marble. You can use the scale only two 
times. 


***The goal: Build an algorithm that can find the heavy
marble out of 8 using a balance scale only three times. 


***Docs: 

Class Batch --- Batch contains a hidden array of marbles 
that looks like this:

[50,50,50,51,50,50,50,50,50]

In this set, the fourth (index 3) marble is heavier. 

Initialize this set like so: 

var set = new Batch(3);

The Batch Class takes a first argument which designates the
marble number (0-8) that is heavier

Batch has a single method 'weigh'. 

Batch.weigh takes in two arguments, each being an array. The
arrays must be of equal length, and without containing 
duplicates or overlap. For example, if we were to weigh the
marbles 0 through 2 versus marbles 3 through 5 in the above 
set, we would run: 

set.weigh([0,1,2], [3,4,5]); => [LEFT, RIGHT]:  [ 150, 151 ]

If in your function, you attempt to call set.weigh more than
two times, you will face the error message: 

"you have exceeded two calls to Batch.weigh"

That is all, have fun!! Please let me know if you have any
questions!

*/


// var Batch = require('./scale.js');

// var test = new Batch(3, 'heavier');

  

var findOddMarble = function(set){
  // your work here

  var work1 = set.weigh([0,1,2],[3,4,5]);
  
  if (work1[0] === work1[1]){
    var work2 = set.weigh([6], [7]);
    if (work2[0] === work2[1]){
      return 8;
    } else if (work2[0] > work2[1]){
      return 6;
    } else {
      return 7;
    }
  } else if (work1[0] > work1[1]){
    var work2 = set.weigh([0], [1]);
    if (work2[0] === work2[1]){
      return 2;
    }else if (work2[0] > work2[1]){
      return 0;
    } else {
      return 1;
    }
  } else {
    var work2 = set.weigh([3], [4]);
    if (work2[0] === work2[1]){
      return 5;
    } else if (work2[0] > work2[1]){
      return 3;
    } else {
      return 4;
    }
  }
}
















// DON'T TOUCH ME
module.exports = findOddMarble;