/*

Of Marbles and Scales

***The problem: You have a 11 marbles of equal weight and one
that is either heavier or lighter. Your goal, using a 
balance scale is to find that odd marble. You can use the 
scale only three times. 


***The goal: Build an algorithm that can find the odd marble
out of 12 using a balance scale only three times. 


***Docs: 

Class Batch --- Batch contains a hidden array of marbles 
that looks like this:

[50,50,50,51,50,50,50,50,50,50,50,50]

In this set, the fourth (index 3) marble is heavier. 

Initialize this set like so: 

var set = new Batch(3, 'heavier');

The Batch Class takes a first argument which designates the
marble number (0-11), and a second argument that tells the 
batch whether the specified marble is 'heavier' or 'lighter'

Batch has a single method 'weigh'. 

Batch.weigh takes in two arguments, each being an array. The
arrays must be of equal length, and without containing 
duplicates or overlap. For example, if we were to weigh the
marbles 0 through 2 versus marbles 3 through 5 in the above 
set, we would run: 

set.weigh([0,1,2], [3,4,5]); => [LEFT, RIGHT]:  [ 150, 151 ]

If in your function, you attempt to call set.weigh more than
three times, you will face the error message: 

"you have exceeded three calls to Batch.weigh"

That is all, have fun!! Please let me know if you have any
questions!

*/


// var Batch = require('./scale.js');

// var set = new Batch(3, 'heavier');

  

var findOddMarble = function(set){
  // your work here

  
}


module.exports = findOddMarble;