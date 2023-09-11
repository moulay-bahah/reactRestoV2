import { useNavigate } from "react-router-dom"


export default function InfoIteme({ emploie, Place, Table, paiement, Validation, date, Montant, demandes,id,Prix}) {

  const Navigate=useNavigate()
  const Update = ()=>{
    Navigate(`/PageUpdateForm/${id}`)
    console.log(id)
  }

  return (
      <tr>
        <td>{emploie}</td>
        <td>{Place}</td>
        <td>{Table}</td>
        <td>{paiement}</td>
        <td style={ Validation === "Valider" ? {color: "green"} : {color: "red"} }>{Validation}</td>
        <td>{date}</td>
        <td>{Montant}</td>
        <td>{demandes}</td>
        <td>
          <button onClick={Update}>
            update
          </button>
          <button>
            delete
          </button>
        </td>
        <td>{Prix}</td>
      </tr>
  )
}