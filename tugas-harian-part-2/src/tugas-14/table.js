import React, {useContext} from "react"
import {buahContext} from "./tugas14"

const tabelBuah = () => {
    const [buah] = useContext(buahContext)

    return(
        <table>
            <tr>
                <td>Nama</td>
                <td>Price</td>
                <td>Weight</td>
            </tr>
          {buah.map(el=>{
            return <tr>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.weight}</td>
            </tr>
          })}
        </table>
      )
}

export default tabelBuah