// Buatlah pseudocode untuk mengecek apakah seseorang dapat membuat SIM atau tidak.
// Seseorang diperbolehkan membuat SIM jika usianya lebih besar atau sama dengan 17 tahun.

// TODO: answer here

function cekUmur(){
  const umur = parseInt(prompt("Masukan umur anda: "));
  if(umur >= 17){
    document.write("anda bisa membuat sim")
  }else{
    document.write("waduh anda belum bisa membuat sim")
  }
}

cekUmur();


