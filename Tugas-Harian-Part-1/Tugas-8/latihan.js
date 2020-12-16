setTimeout(function() { // Set interval untuk berkali kali, setTimeout hanya sekali
    console.log("Aku Keriii")
}, 5000)

console.log("Aku Duluan Yaa")


console.log("\n------Callback------\n")
function periksa(nomorAntri, Callback){
    if(nomorAntri > 20){
        Callback(false)
    }
    else if(nomorAntri < 20){
        Callback(true)
    }
}

periksa(25, function(cek) {
    if(cek){
        console.log("Sebentar lagi giliran saya")
    } else {
        console.log("Jalan jaln dulu ah")
    }
})

console.log("\n------Modification Callback------\n")

function nomorAntrean(noAntri, callback){
    console.log(`sekarang antri ${noAntri}`)
    setTimeout(function(){
        if (noAntri === 10){
            console.log("Saya akan masuk ruangan dokter")
            callback(0)
        } else {
            console.log("Masih menunggu");
            callback(noAntri + 1)
        }
    }, 1000)
}

var antrian = 7;

// nomorAntrean(antrian, function(nomorAntreanBaru){
//     nomorAntrean(nomorAntreanBaru, function(nomorAntreanBaru1){
//         nomorAntrean(nomorAntreanBaru1, function(nomorAntreanBaru2){
//             nomorAntrean(nomorAntreanBaru2, function(nomorAntreanBaru3){
//                 return nomorAntreanBaru3
//             })
//         })
//     })
// });


function ekseskusi(noAntri){
    nomorAntrean(noAntri, function(nomorAntreanbaru){
        if (nomorAntreanbaru !== 0){
            ekseskusi(nomorAntreanbaru);
        }
    })
}

ekseskusi (antrian)