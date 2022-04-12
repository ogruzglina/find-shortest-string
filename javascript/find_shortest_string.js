function findShortestString(arr) {
  // type your code here
  //if arr length is 1 then return length of that element
  if (arr.length === 1) {
    return arr[0];
  }
 let min = arr[0];
  //go through all elem in arr and compare length 
  // if arr[i].length less than min then min = arr[i]
  for (let i = 1; i < arr.length; i++) {
    if (min.length > arr[i].length) {
      min = arr[i];
    }
  }
  //return min
  return min;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'aaa'");
  console.log("=>", findShortestString(['aaa']));

  console.log("");
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
