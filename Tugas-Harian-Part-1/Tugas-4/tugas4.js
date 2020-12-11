// Soal no.1
var angka = 2;
var kata = "LOOPING PERTAMA";
var angka2 = 20;
var kata2 = "LOOPING KEDUA";

console.log(kata);
while (angka <= 20){ // Jawaban Soal no.1
    console.log(angka + " - I Love Coding");
    angka+=2;
}

console.log(kata2);
while (angka2 >= 2){ // Jawaban Soal no.1
    console.log(angka2 + " - I will Become a Front-end Developer");
    angka2-=2;
}


// Soal no.2
var angka3 = 1;
var genapganjil = 2;
var kelipatan3 = 3;

for (;angka3 < 20; angka3++){
    if (angka3 % kelipatan3 == 0 && angka3 %genapganjil == 1){
        console.log(angka3 + " I love coding")
    } else if (angka3 % genapganjil == 1){
        console.log(angka3 + " santai")
    } else{
        console.log(angka3 + " berkaualitas")
    }
}


// Soal no.3

var angka4 = "";
for (var i=0;i < 8; i++){ // Jawaban Soal no.3
    for (var j=1; j<i; j++){ // Jawaban Soal no.3
        angka4 += "#" // Jawaban Soal no.3
    }
    angka4 += "\n" + "\n"
}
console.log(angka4);

// Soal no.4
var kalimat = "saya sangat senang belajar javascript";
var ubah = kalimat.split(" ");
console.log(ubah);


// Soal no.5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sort = daftarBuah.sort();
console.log(sort);