//  Soal no.1
class Hewan {
    constructor (nama, kaki, darahDingin) { // Jawaban Soal no.1
        this._namaHewan = nama;
        this._jumlahKaki = kaki;
        this._coldBlooded = darahDingin;
    }
    get namaHewan() {
        return this._namaHewan; // Jawaban Soal no.1
    }
    get jumlahKaki() {
        return this._jumlahKaki;
    }
    get coldBlooded() {
        return this._coldBlooded; // Jawaban Soal no.1
    }
}

shaun = new Hewan("Shaun", 4, 0);
console.log("Namanya " + shaun.namaHewan); // Jawaban Soal no.1
console.log("Jumlah kaki " + shaun.jumlahKaki);
console.log(shaun.coldBlooded + "\n");

class Frog extends Hewan {
    constructor(nama, jump){
        super (nama);
        this._jump = jump; // Jawaban Soal no.1
    }
    jump(){
        return console.log("hop-hop");
    }
}

var kodok = new Frog("buduk")
console.log("Namanya " + kodok.namaHewan); // Jawaban Soal no.1
kodok.jump() // "hop hop" 

class Ape extends Hewan {
    constructor(nama, yell){ // Jawaban Soal no.1
        super (nama);
        this._yell = yell;
    }
    yell(){
        return console.log("Auooooo"); // Jawaban Soal no.1
    }
}

var sungkong = new Ape("Kera Sakti")
console.log("\nNamanya " + sungkong.namaHewan); // Jawaban Soal no.1
sungkong.yell()



// Soal no.2

class Jam{
    constructor ({template}, render, stop, start, date){
        this.template = template;
        this._render = render;
        this._stop = stop;
        this._start = start;
        this._date = date;
    }

    render = (hours, mins, secs) => {
        var date = new Date();
        this.hours = hours;
        this.mins = mins;
        this.secs = secs;

        var hours = date.getHours();
        if (hours < 10) this._hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(this.output);
    }

    stop = () => {
        clearInterval(timer);
    };
    
    get render(){
        return this._render;
    }

    start() {
        render();
        timer = setInterval(render, 1000);
    };
}
var clock = new Jam({template: 'h:m:s'});
clock.start();  

// Soal no.2
// function Clock({ template }) {
  
//     var timer;
  
//     function render() {
//       var date = new Date();
  
//       var hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       var mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       var secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       var output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
//   var clock = new Clock({template: 'h:m:s'});
//   clock.start();


