// Breaking the Records
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(arr) {
  // Write your code here
  // TODO: answer here
  let best;
    let worst;
    best = worst = arr.shift() //Get and remove the first element
    let n = arr.length;
    let recBest = 0;  //Use more descriptive names here
    let recWorst = 0; //...and here as well
    for (let i = 0; i < n; i++) {
        if (arr[i] > best) {
            best = arr[i];
            recBest++;
        } else if (arr[i] < worst) {
            worst = arr[i];
            recWorst++;
        }
    }
    return [recBest, recWorst];
}

function main() {
  //     var n = parseInt(readLine());
  //     s = readLine().split(' ');
  //     s = s.map(Number);
  var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // override input
  var result = breakingRecords(scores);
  console.log(result.join(' ') + '\n')

}

main(); // execute program

module.exports = breakingRecords