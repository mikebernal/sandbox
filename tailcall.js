/**
 * 
 * @param {number} i starting unit increment;
 * @param {number} j thresold which the i iterator will stop incrementing 
 */
function addOne(i, j) {
  console.log('i is: ' + i);
  if (i < j) {
    // Calls addOne function until i iterator it reaches j thresold
    return i + addOne(i + 1, j);

  } else {
    return console.log("Iteration to " + j + " complete");
  }
}
