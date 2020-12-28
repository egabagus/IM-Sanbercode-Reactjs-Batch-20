import React, {useContext, useState} from "react"
import {buahContext} from "./tugas14"


const BuahForm = () =>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [weight, setWeight] = useState(0)
  
    const handleSubmit = (event) =>{
      event.preventDefault()
      setDaftarBuah([...buah, {name, price, weight}])
      setName("")
      setPrice("")
      setWeight("")
    }
    const handleChangeName = (event) =>{
      setName(event.target.value)
    }
  
    const handleChangePrice = (event) =>{
      setPrice(event.target.value)
    }

    const handleChangeWeight = (event) =>{
        setWeight(event.target.value)
      }
  
    return(
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={handleChangeName} />
          <input type="number" value={price} onChange={handleChangePrice} />
          <input type="number" value={weight} onChange={handleChangeWeight} />
          <button>submit</button>
        </form>
      </>
    )
  
  }
  
  export default BuahForm