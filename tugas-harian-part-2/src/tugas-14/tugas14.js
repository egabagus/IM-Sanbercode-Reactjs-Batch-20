import React, {useState, createContext} from "react";
import axios from "axios";

export const buahContext = createContext();

const buahProvider = () => {  
    const [daftarBuah, setDaftarBuah] =  useState(null)
    const [input, setInput]  =  useState({name: "", price: "", weight: 0, id: null})
  
    useEffect( () => {
      if (daftarBuah.length === 0){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
            let data = res.data
            setDaftarBuah(data.map(el=>{
                setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
            }))
        })
      }
    }, [daftarBuah])
  
    return (
        <buahContext.Provider value = {[buah, setDaftarBuah]}>
            {props.childern}
        </buahContext.Provider>
    )
};