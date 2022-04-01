// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

let calculator = {
  // Tulis kode di sini
  // TODO: answer here
  x : 25,
  y : 5,

  sum:function(){
    return this.x += this.y;
  },
  substract: function(){
    return this.x - this.y
  },
  multiply:function(){
    return this.x * this.y
  },
  division:function(){
    return this.x / this.y
  }

};
  
// calculator.read();

console.log(calculator.sum());


// console.log(calculator.substract());
// console.log(calculator.multiply());
// console.log(calculator.division());