/************************************************
 * Where is the bug? How do we refactor
 * the code to resolve the problem?
 **********************************************/

// The program with Bugs!
function swap(x, y) {
  // "x" variable is over written and lost forever - Bug!
  // Put the value of x in a temp varialbe so its preserved.
  x = y;
  y = x;

  return [y + x];
}

console.log(swap(2, 3));

/******************************************************
 * The Solution: Step by Step:
 * 1. Declare the new variables.
 * 2. Store x somewhere safe, i.e. a temp variable.
 * 3. Then swap.
 * 4. Then get value of x into y.
 * tip: pass in the three variables. Then do the swap.
 * ****************************************************/

function swap(x, y) {
  let x = 2;
  let y = 3;
  let temp = x;

  x = y;
  y = temp;

  // return [y, x];
  return;
  console.log(`Variable ${x} is now swapped with varialbe ${y}`);
}

// console.log(swap(y, x));
