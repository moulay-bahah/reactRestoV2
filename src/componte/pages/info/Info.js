import Header from "../../header/Header"
import InfoIteme from "../../InfoIteme/InfoIteme"
import "./info.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Info() {

    const [Info, setInfo] = useState([])
    const [chercher, setChercher] = useState("")

    const handelchercher = (event) => {
      setChercher(event.target.value)
    }

    useEffect(()=>{
      if (chercher === "") {
        axios.get(`http://localhost:30001/info/`).then(res=>{
      setInfo(res.data)
      })
      } else {
        axios.get(`http://localhost:30001/info/?demandes=${chercher}`).then(res=>{
      setInfo(res.data)
      
      })
      }
    },[chercher])
    console.log(Info)

  return (
    <div className="main">
      <Header titel="info" Show_Data="Demande" />
      <div className="contenair-form">
        <div className="input">
          <div className="text chercher">
            <input
              type="text"
              placeholder="chercher par demandes"
              name="chercher"
              onChange={handelchercher}
            />
          </div>
          <div className="date chercher">
            <input
              type="date"
              placeholder="chercher par date"
              name="prix"
            />
            <input
              type="date"
              placeholder="chercher par date"
              name="prix"
            />
            <button>chercher</button>
          </div>
        </div>
      <table id="customers">
          <thead><tr>
            <th>emploie</th>
            <th>Place</th>
            <th>Table</th>
            <th>paiement</th>
            <th>Validation</th>
            <th>date</th>
            <th>Montant</th>
            <th>demandes</th>
            <th>
              update/delete
            </th>
            <th>Prix</th>
          </tr>
          </thead>
          <tbody>
          {Info.map((info, i) =>  <InfoIteme {...info} key={info.id} />)}
          </tbody>
          
        </table>
      </div>
    </div>
  )
}