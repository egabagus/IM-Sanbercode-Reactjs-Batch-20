// Soal no.1
function halo(){ // Jawaban Soal no.1
    return "Halo Sanbers!"; // Jawaban Soal no.1
}

console.log("\n" + halo()) // Jawaban Soal no.1


// Soal no.2
var angkaPertama = 12;
var angkaKedua = 4;

function kalikan() {  // Jawaban Soal no.2
    return angkaPertama * angkaKedua  // Jawaban Soal no.2
  }
console.log(angkaPertama + " * " + angkaKedua + " = " + kalikan())  // Jawaban Soal no.2


// Soal no.3
var nama = "John Doe";
var umur = 30;
var alamat = "Belum punya";
var hobi = "gaming";
var perkenalan = introduce(nama, umur, alamat, hobi);

function introduce(){  // Jawaban Soal no.3
    return "nama saya " + nama + ", umur saya " + umur + ", alamat saya ada di " + alamat + ", dan saya mempunyai hobi " + hobi;  // Jawaban Soal no.3
}
console.log(perkenalan)  // Jawaban Soal no.3


// Soal no.4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objectDaftarPeserta = {  // Jawaban Soal no.4
    nama : "Asep",
    jenis_kelamin : "Laki-laki",  // Jawaban Soal no.4
    hobby : "Baca Buku",
    tahun_lahir : 1992  // Jawaban Soal no.4
}

console.log(objectDaftarPeserta)  // Jawaban Soal no.4


// Soal no.5
var objDataBuah = [{
    no : 1,
    name : "Stroberi",
    warna : "Merah",
    biji : "Ada",
    harga : 9000
},{
    no : 2,
    name : "Jeruk",
    warna : "Orange",
    biji : "Ada",
    harga : 8000
},{
    no : 3,
    name : "Semangka",
    warna : "Hijau & Merah",
    biji : "Ada",
    harga : 10000
},{
    no : 4,
    name : "Pisang",
    warna : "Kuning",
    biji : "Tidak Ada",
    harga : 5000
}]
var objDataFilter = objDataBuah.filter(function(item){
    return item.no == 1;
})

console.log(objDataFilter)


// Soal no.6
var datafilm = []; // Jawaban Soal no.6
datafilm.push({judul : "The Meg", genre : "action", durasi : "115 menit", tahun : 2019}); // Jawaban Soal no.6
console.log(datafilm) // Jawaban Soal no.6