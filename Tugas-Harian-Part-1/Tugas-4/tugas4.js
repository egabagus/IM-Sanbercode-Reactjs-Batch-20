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
    if (angka3 % genapganjil == 0){
        console.log(angka3 + " santai")
    } else if (angka3 % genapganjil == 1){
        console.log(angka3 + " berkualitas")
    } else if (angka3 % kelipatan3 == 0){
        console.log(angka3 + " I love coding")
    } else{
        console.log(angka3)
    }
}


// Soal no.3
for (var i=1;i<=5;i++){ // Jawaban Soal no.3
    for (var j=1;j<=i;j++){ // Jawaban Soal no.3
        console.log("*"); // Jawaban Soal no.3
    }
}

// Soal no.4
var kalimat = "saya sangat senang belajar javascript";
var saya = kalimat.slice(0,4);
var sangat = kalimat.slice(5,11);
var senang = kalimat.slice(12,18);
var belajar = kalimat.slice(19,26);
var javascript = kalimat.slice(27,38);
console.log(saya + " , " + sangat + " , " + senang + " , " + belajar + " , " + javascript);


// Soal no.5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sort = daftarBuah.sort();
console.log(sort);