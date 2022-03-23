// Buatlah pseudocode untuk menjumlahkan bilangan genap yang ada di antara 1 sampai 10

// TODO: answer here

let array = [];
let total = 0;

for(let i = 1 ; i <= 10; i++){
  if(i % 2 == 0){
   array.push(i);
   
  }
}

for( x = 0; x < array.length; x++){
  total += array[x]
}
console.log("Total bilangan genap nyang dijumlahkan dari range 1 - 10 adalah: " + total);
