// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    let result = 0
    x.forEach((item)=>result += Number(item))
    return result
}
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])

// this is what I was looking for: MAP REDUCE

function sumMixAlt(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}
// or 
const sumMixAlt2 = x => x.reduce((a, b) => +b + a, 0)


// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} is at index ${index} in ${array}`);
// });
// Test.assertEquals(sumMix([9, 3, '7', '3']), 22);
// Test.assertEquals(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// Test.assertEquals(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);