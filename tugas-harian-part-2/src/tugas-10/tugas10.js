import React from "react";
import './tugas10.css';


class Nama extends React.Component{
    render(){
        return <>{this.props.nama}</>
    }
}

class Harga extends React.Component{
    render(){
        return <>{this.props.harga}</>
    }
}

class Berat extends React.Component{
    render(){
        return <>{this.props.berat}</>
    }
}


let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]


class Data extends React.Component{
    render(){
        return (<>
        <h1>Tabel Harga Buah</h1>
        <table border="1" className="table-buah">
            <tr>
                <th>Nama Buah</th>
                <th>Harga</th>
                <th>Berat</th>
            </tr>
                {dataHargaBuah.map(el=> {
          return (
            <tr>
                <td><Nama nama={el.nama}/></td>
                <td><Harga harga={el.harga}/></td>
                <td><Berat berat={el.berat}/></td>
            </tr>
          )
        })}
        </table>
        </>
        )
    }
}

export default Data;