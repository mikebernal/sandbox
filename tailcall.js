/**
 * addOne() function increments/loops until j times.
 * @param {number} i starting unit for incrementing;
 * @param {number} j thresold which the i iterator will stop incrementing 
 */
function addOne(i, j) {
  console.log('i is: ' + i);
  if (i < j) {
    // Calls addOne function until i iterator reaches j thresold
    return i + addOne(i + 1, j);

  } else {
    return console.log("Iteration to " + j + " completed.");
  }
}
