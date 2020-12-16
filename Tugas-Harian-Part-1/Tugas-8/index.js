var readBooks = require('./callback.js')

 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

function mulaiBaca(a){
    readBooks(10000, books[a], function(sisaWaktu){
        if (sisaWaktu > 0 && a <= books.length-2){
            a++
            mulaiBaca(a)
        }
        console.log(a)
    })
}
mulaiBaca(0)