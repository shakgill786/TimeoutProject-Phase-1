/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in 
milliseconds, and an amount. The function should set an interval with 
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

function intervalCount(cb, delay, amount) {
  let counter = 0; // Initialize a counter variable to keep track of callback executions
  const interval = setInterval(function () {
      cb(); // Call the provided callback function
      counter++; // Increment the counter
      if (counter === amount) { // Check if the counter reached the specified amount
          clearInterval(interval); // Stop the interval execution
      }
  }, delay); // Set interval to call the callback function at given delay
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
