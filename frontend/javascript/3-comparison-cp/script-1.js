// Pengecekan angka positif, negatif, atau 0 dengan nested if

// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));

// TODO: answer here
if(number > 0){
  document.write(number + " adalah bilangan Positif");
}else if(number < 0){
  document.write(number + " adalah bilangan negatif");
}else if(number === 0){
  document.write(number + " adalah bilangan 0");
}else{
  document.write("anda belum memasukan angka");
}
