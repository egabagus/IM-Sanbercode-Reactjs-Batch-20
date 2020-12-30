import React from "react";
import './tugas9.css';



class Tugas9 extends React.Component{
  render(){
      return (<>
        <body>
          <form className="form">
          <h1>Form Pembelian Buah</h1>
            <table>
              <tr>
                <td className="label">Nama Pelanggan : </td>
                <td><input type= "text"></input></td>
              </tr>
              <tr>
                <td className="label">Daftar Item : </td>
                <td><input type="checkbox" name="semangka" value="semangka"/> Semangka</td>
              </tr>
              <tr>
                <td></td>
                <td><input type="checkbox" name="semangka" value="semangka"/> Jeruk</td>
              </tr>
              <tr>
                <td></td>
                <td><input type="checkbox" name="semangka" value="semangka"/> Nanas</td>
              </tr>
              <tr>
                <td></td>
                <td><input type="checkbox" name="semangka" value="semangka"/> Salak</td>
              </tr>
              <tr>
                <td></td>
                <td><input type="checkbox" name="semangka" value="semangka"/> Anggur</td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="submit" className="tombol-input"></input></td>
              </tr>
            </table>
          </form>
        </body>

      </>
      )
  }
}

export default Tugas9;