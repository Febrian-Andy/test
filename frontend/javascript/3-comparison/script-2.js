// Pengecekan angka positif, negatif, atau 0 dengan switch case

// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));

// TODO: answer here

switch(true) {
  case (number > 0):
    document.write(number+"adalah bilangan positif");
    break;
  case (number < 0):
    document.write(number+"adalah bilangan negatif");
    break;
  case (number === 0):
    document.write(number+"adalah bilangan 0");
    break;
  default:
    document.write("belum memasukan nilai")
}
