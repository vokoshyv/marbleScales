# marbleScales

![image](http://www.relativelyinteresting.com/wp-content/uploads/2014/08/8-marbles-balance-scale-puzzle.jpg)

Welcome to the marbleScales repository. This repository 
contains both an easy and hard version. Let's get right to 
it! 

### Setup

Fork the repo over, and then clone it down to your machine. 
The language is JavaScript and we will be using Node to run
the files. 

For those of you who do not have Node, run either of the 
following commands to install it: 

```
brew install Node

sudo apt-get install nodejs
```

From here, run `npm install` to install the Node Modules 
Mocha and Chai. (These will be used to run unit tests)

When that is complete, you're all set to go! Head over to 
the main.js file in the easy folder to get started. 

### Running a file. 

You will be coding in the main.js files in the easy and hard 
directory, and then running the files with Node. Let's test 
it out. Write these two lines under the findOddMarble 
function in easy/main.js: 

```
console.log('hello');
console.log(3 + 5 + 9);
```

Now, from the root marbleScales directory, run: 

```
node easy/main.js
```

You will see the output of those two console logs in your 
terminal. Neat, huh? You can test the code you write in this
same fashion. 

##### Tip #1: Use Nodemon instead of Node

Eventually, you'll tire of returning to your terminal, 
typing in `node easy/main.js` (or pressing UP ENTER), so
I would recommend a tool called Nodemon. Install with: 

```
npm install -g nodemon
```

Now, you run your file with: 

```
nodemon easy/main.js
```

Whenever you save the file you're working in, the nodemon
package will refresh the Node environment as well. To exit 
from this Nodemon environment, just press Control + C or 
Command + C. 

##### Tip #2: using console.log

To view items in the terminal, it has to be console logged. 
For example, if you have `[3,4,5].length` inside your 
easy/main.js file, and you run `node easy/main.js`, you will
not see the output. You must instead write: 

```
console.log([3,4,5].length);
```

You should now see the output. 

### Testing your Code

As you're writing out the logic for the findOddMarble 
function, you'll likely run tests to check its performance. 

For example, you may run something like this: 

```
var Batch = require('./scale.js');

var test = new Batch(5, 'heavier');

var findOddMarble = function(set){
  // your work here

  // blah blah magic woosh
  return 5
}

console.log(findOddMarble(5)); // ==> 5
```

I've included tests in the test.js files to check the 
performance of your function against every possible 
scenario. To run these tests, go to the root directory in 
your terminal and run (based on the mode): 

```
mocha easy/test.js

mocha hard/test.js
```

The easy test.js file runs 9 cases where the heavier marble 
is in positions 0 through 8. 

The hard test.js file runs 24 cases where the odd (heavier 
or lighter) marble is in positions 0 through 11. 

### Questions/Comments

If you have any questions and/or comments, please feel free
to contact me. 