var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

// books.forEach(element => readBooksPromise(10000, element, (callbackFn) => {
//     console.log(callbackFn)
//   }))

function ekseskusi(i){
    readBooksPromise(10000, books[i]).then (function(sisaWaktu){
        if(sisaWaktu > 0 && i <= books.length-2){
            i++
            ekseskusi(i)
        }
        console.log(i)
    }).catch(function(err){
        console.log(err)
    })
}

ekseskusi(0)