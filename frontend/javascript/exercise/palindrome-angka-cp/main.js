/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 * 
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

function angkaPalindrome(num) {
  // TODO: answer here
  let x = 1;
  let y = 2;

  while (x !== y) {
    num++;
    let string = num.toString();
    x = string.slice(0, Math.ceil(string.length / 2));
    y = string
      .slice(Math.floor(string.length / 2), string.length)
      .split("")
      .reverse()
      .join("");
  }
  return num;
}


console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome