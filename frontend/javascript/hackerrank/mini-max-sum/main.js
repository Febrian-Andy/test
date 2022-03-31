// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  const numbers = arr.slice('').sort();

  let min = 0;
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i < 4) {
      min = min + numbers[i];
    }
    if (i > 0 && i < 5) {
      max += numbers[i];
    }
  }

  return `${min} ${max}`;

} 

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum