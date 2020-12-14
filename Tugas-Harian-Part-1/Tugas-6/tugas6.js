// Soal no.1
const phi = 3.14;
let r;
let d;

console.log("Luas lingkaran ");
const luasLingkaran = (r) => {  // Jawaban Soal no.1
    return phi * r * r;
}
console.log(luasLingkaran(5));

console.log("\nKeliling lingkaran");
const kelilingLingkaran = (d) => {  // Jawaban Soal no.1
    return phi * d;
}
console.log(kelilingLingkaran(10));


// Soal no.2
const kalimat1 = "saya";
const kalimat2 = "adalah";
const kalimat3 = "seorang";
const kalimat4 = "frontend";
const kalimat5 = "developer";

const gabungan = (kalimat) => {
    return kalimat = `${kalimat1} ${kalimat2} ${kalimat3} ${kalimat4} ${kalimat5}`  // Jawaban Soal no.2
}
console.log(gabungan())


// Soal no.3
function cetakNama(namadepan, namabelakang){
    return{
        namadepan,
        namabelakang,
        namalengkap(){
            console.log(namadepan + namabelakang)
        }
    }
}
cetakNama("Ega ", "Bagus Purnama").namalengkap();


// Soal no.4
const newObject = {
    firstname : "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstname, lastName, destination, occupation, spell} = newObject;
console.log(firstname, lastName, destination, occupation, spell)


// Soal no.5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)