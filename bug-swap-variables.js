/***
 * A student written program to swap variable.
 * However, there is a bug. Can you find
 * the bug and resolve it?
 ***/

function swap(x, y) {
  x = y;
  y = x;

  return [y + x];
}

console.log(swap(2, 3));
