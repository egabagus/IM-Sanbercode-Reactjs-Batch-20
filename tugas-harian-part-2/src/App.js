import logo from './logo.svg';
import './App.css';
import Data from './tugas-10/tugas10';
import Tugas9 from './tugas-9/tugas9';
import React, {Component} from 'react';
import Timer from './tugas-11/tugas11';

function App() {
  return (
    <>
      <div className="form-buah">
        <Tugas9/>
      </div>
      <div className="form-buah">
        <Data/>
      </div>
      <div className="form-buah">
        <Timer/>
      </div>
    </>
  );
}

export default App;

// let dataHargaBuah = [
//   {nama: "Semangka", harga: 10000, berat: 1000},
//   {nama: "Anggur", harga: 40000, berat: 500},
//   {nama: "Strawberry", harga: 30000, berat: 400},
//   {nama: "Jeruk", harga: 30000, berat: 1000},
//   {nama: "Mangga", harga: 30000, berat: 500}
// ]


// class Nama extends React.Component{
//   render(){
//       return <h3>Buah {dataHargaBuah.nama}</h3>
//   }
// }

// class Harga extends React.Component{
//   render(){
//       return <h3>Harga {dataHargaBuah.harga}</h3>
//   }
// }

// class Berat extends React.Component{
//   render(){
//       return <h3>Berat {this.props.berat}</h3>
//   }
// }


// // class Daftar extends React.Component {
// //   render() {
// //     return (
// //       <>
// //         {dataHargaBuah.map(el=> {
// //           return (
// //             <div style={{border: "1px solid #000", padding: "20px"}}>
// //               <Nama nama={el.nama}/> 
// //               <Harga harga={el.harga}/>
// //               <Berat berat={el.berat}/> 
// //             </div>
// //           )
// //         })}
// //       </>
// //     )
// //   }
// // }