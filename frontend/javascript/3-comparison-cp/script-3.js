// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = parseInt(prompt("Masukan nilai: "));

// TODO: answer here

switch(true) {
  case (score >= 91 && score <= 100):
    document.write(score + " " + "Nilai Anda A");
    break;
  case (score >= 71 && score <= 90):
    document.write(score + " "+"Nilai Anda B");
    break;
  case (score >= 61 && score <= 70):
    document.write(score + " " + "Nilai Anda C");
    break;
  case (score >= 51 && score <= 60):
    document.write(score + " " + "Nilai Anda D");
    break;
  case (score >= 0 && score <= 50):
    document.write(score + " " + "Nilai Anda E");
    break;
  default:
    document.write("belum memasukan nilai")
}
