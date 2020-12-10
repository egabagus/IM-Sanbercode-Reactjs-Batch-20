// Soal no.1
var kataPertama = "saya";
var kataKedua = " Senang";
var kataKetiga = " belajar";
var kataKeempat = " javascript";
var upper = kataKeempat.toUpperCase();

console.log(kataPertama.concat(kataKedua).concat(kataKetiga).concat(upper)); // Jawaban Soal no. 1


// Soal no.2
var KataPertama = "1";
var KataKedua = "2";
var KataKetiga = "4";
var KataKeempat = "5";

console.log(parseInt(KataPertama)+parseInt(KataKedua)+parseInt(KataKetiga)+parseInt(KataKeempat)); //Jawaban Soal no.2


// Soal no.3
var kalimat = 'wah javascript itu keren sekali'; 

var kata_Pertama = kalimat.substring(0, 3); 
var kata_Kedua = kalimat.substring(4,14);
var kata_Ketiga = kalimat.substring(15,18);
var kata_Keempat = kalimat.substring(19,24);
var kata_Kelima = kalimat.substring(25,31);

console.log('Kata Pertama: ' + kata_Pertama); // Jawaban Soal no.3
console.log('Kata Kedua: ' + kata_Kedua); // Jawaban Soal no.3
console.log('Kata Ketiga: ' + kata_Ketiga); // Jawaban Soal no.3
console.log('Kata Keempat: ' + kata_Keempat); // Jawaban Soal no.3
console.log('Kata Kelima: ' + kata_Kelima); // Jawaban Soal no.3


// Soal no.4
var nilai = 75;

if(nilai >= 80){ // Jawaban Soal no.4
    console.log("nilai "+ nilai +" Indeksnya A"); // Jawaban Soal no.4
} else if (nilai >=70 && nilai <80){
    console.log("nilai "+ nilai +" Indeksnya B"); // Jawaban Soal no.4
} else if (nilai >=60 && nilai <70){
    console.log("nilai "+ nilai +" Indeksnya C"); // Jawaban Soal no.4
} else if (nilai >=50 && nilai <60){
    console.log("nilai "+ nilai +" Indeksnya D"); // Jawaban Soal no.4
} else {
    console.log("nilai "+ nilai +" Indeksnya E"); // Jawaban Soal no.4
}


// Soal no.5
var tanggal = 16;
var bulan = 5;
var tahun = 2003;

switch(bulan){ // Jawaban Soal no.5
    case 1: {console.log("Tanggal lahir saya adalah " + tanggal + " Januari" +tahun); break;}
    case 2: {console.log("Tanggal lahir saya adalah " + tanggal + " Februari " +tahun); break;} // Jawaban Soal no.5
    case 3: {console.log("Tanggal lahir saya adalah " + tanggal + " Maret " +tahun); break;}
    case 4: {console.log("Tanggal lahir saya adalah " + tanggal + " April " +tahun); break;} // Jawaban Soal no.5
    case 5: {console.log("Tanggal lahir saya adalah " + tanggal + " Mei " +tahun); break;}
    case 6: {console.log("Tanggal lahir saya adalah " + tanggal + " Juni " +tahun); break;} // Jawaban Soal no.5
    case 7: {console.log("Tanggal lahir saya adalah " + tanggal + " Juli " +tahun); break;}
    case 8: {console.log("Tanggal lahir saya adalah " + tanggal + " Agustus " +tahun); break;} // Jawaban Soal no.5
    case 9: {console.log("Tanggal lahir saya adalah " + tanggal + " September " +tahun); break;}
    case 10: {console.log("Tanggal lahir saya adalah " + tanggal + " Oktober " +tahun); break;} // Jawaban Soal no.5
    case 11: {console.log("Tanggal lahir saya adalah " + tanggal + " November " +tahun); break;}
    case 12: {console.log("Tanggal lahir saya adalah " + tanggal + " Desember " +tahun); break;} // Jawaban Soal no.5
}