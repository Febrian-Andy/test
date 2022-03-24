// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    // TODO: answer here
    var i = str.length,
      o = '';
    while (i > 0) {
        o += str.substring(i - 1, i);
        i--;
    }
    return o;
}

// const string = prompt('Masukan teks: ');

const result = reverseString('Hello world');
console.log(result);