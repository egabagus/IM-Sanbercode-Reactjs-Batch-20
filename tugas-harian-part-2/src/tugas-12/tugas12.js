import React, {Component} from "react"
import './tugas12.css'

class DaftarBuah extends Component{

  constructor(props){
    super(props)
    this.state = {
     daftarBuah : [
      {nama: "Semangka", harga: 10000, berat: 1000},
      {nama: "Anggur", harga: 40000, berat: 500},
      {nama: "Strawberry", harga: 30000, berat: 400},
      {nama: "Jeruk", harga: 30000, berat: 1000},
      {nama: "Mangga", harga: 30000, berat: 500}
    ],
     inputName : "",
     inputHarga : "",
     inputBerat : 0,
     /// array tidak punya index -1 yang berarti create
     indexOfForm: -1    
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
 
  handleDelete(event){
    let index = event.target.value
    let newDaftarBuah = this.state.daftarBuah
    let editedDataBuah = newDaftarBuah[this.state.indexOfForm]
    newDaftarBuah.splice(index, 1)

    if (editedDataBuah !== undefined){
      // array findIndex baru ada di ES6
      var newIndex = newDaftarBuah.findIndex((el) => el === editedDataBuah)
      this.setState({daftarBuah: newDaftarBuah, indexOfForm: newIndex})
      
    }else{
      
      this.setState({daftarBuah: newDaftarBuah})
    }
    
  }
  
  handleEdit(event){
    let index = event.target.value
    let dataBuah = this.state.daftarBuah[index]
    this.setState({
      inputName: dataBuah.nama,
      inputHarga: dataBuah.harga,
      inputBerat: dataBuah.berat,
      indexOfForm: index
    })
  }

  handleChange(event){
    let typeOfInput = event.target.name
    switch (typeOfInput){
      case "name":
      {
        this.setState({inputName: event.target.value});
        break
      }
      case "harga":
      {
        this.setState({inputHarga: event.target.value});
        break
      }
      case "berat":
      {
        this.setState({inputBerat: event.target.value});
          break
      }
    default:
      {break;}
    }
  }

  handleSubmit(event){
    // menahan submit
    event.preventDefault()

    let nama = this.state.inputName
    let harga = this.state.inputHarga.toString()
    let berat = this.state.inputBerat


    let newDaftarBuah = this.state.daftarBuah
    let index = this.state.indexOfForm
    
    if (index === -1){
      newDaftarBuah = [...newDaftarBuah, {nama, harga, berat}]
    }else{
      newDaftarBuah[index] = {nama, harga, berat}
    }

    this.setState({
      daftarBuah: newDaftarBuah,
      inputName: "",
      inputHarga: "",
      inputBerat: 0
    })

  }

  render(){
    return(
      <>
      <div className="post1">
        <div className="form1">
        <h1>Daftar Harga Buah</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.daftarBuah.map((item, index)=>{
                  return(                    
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.nama}</td>
                      <td>{item.harga}</td>
                      <td>{item.berat/1000} kg</td>
                      <td>
                        <button onClick={this.handleEdit} value={index}>Edit</button>
                        &nbsp;
                        <button onClick={this.handleDelete} value={index}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        </div>
        {/* Form */}

        <div className="form1">
        <h1>Form Daftar Harga Buah</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label style={{float: "left"}}>
                Nama:
              </label>
              <input style={{float: "right"}} type="text" required name="name" value={this.state.inputName} onChange={this.handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Harga:
              </label>
              <input style={{float: "right"}} type="text" required name="harga" value={this.state.inputHarga} onChange={this.handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Berat (dalam gram):
              </label>
              <input style={{float: "right"}} type="number" required name="berat" value={this.state.inputBerat} onChange={this.handleChange}/>
              <br/>
              <br/>
              <div>
                <button style={{ float: "right"}}>submit</button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </>
    )
  }
}

export default DaftarBuah
