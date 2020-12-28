import React from "react"
import {buahProvider} from "./tugas14"
import tabelBuah from "./table"
import BuahForm from "./form"

const Buah = () =>{
  return(
    <buahProvider>
      <tabelBuah/>
      <BuahForm/>
    </buahProvider>
  )
}

export default Buah