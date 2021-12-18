function hasTargetSum(array, target) {
  const seenNumbers = {}
  for (let number of array) {
    const complement = target - number
    if (complement in seenNumbers) {
      return true
    }
    seenNumbers[number] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  O(n)
*/

/* 
  Add your pseudocode here

  function(array, target) {
    create empty Object to place seenNumbers
    for number of array
      define the complementary number
      if complement is seen in seen numbers
        return true
      not sure what this line is doing
    if nothing returned true, return false
  }
*/

/*
  Add written explanation of your solution here

  create a placeholder to store seen numbers so that runtime is O(n) instead of O(n ** 2)
  itterate over the array
  check that the current number's complement doesn't equal any of the seen numbers
  if so, return true
  if not, return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for (let number of array) {
//     for (i = 0; i < array.length - 1; i++) {
//       if (array[i] + number === target) {
//         return true;
//       } 
//     }
//   }
//   return false
// }