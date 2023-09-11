import logo from '../../assets/images/logo.jpg';
import './Header.css'
import { useNavigate, useParams } from 'react-router-dom';



// retrive id of food
// we know the food categorie
// pass id to http://localhost:3000/Formfood


export default function Header({ titel, Show_Data}) {
  const {id} = useParams()

  const navigate = useNavigate()
  function Addrepas() {
    if(Show_Data === "Add +") {
      navigate(`/Formfood/${id}`)
    }else if (Show_Data === "Show Data") {
      navigate(`/Info`)
    }
    else if(Show_Data === "Demande"){
      navigate(`/Categorie`)
    }
  }

  return (
    <div className="titel">
      <div>
      <img src={logo} alt="logo" />
      </div>
      <h1>{titel}</h1>
      {Show_Data && <button onClick={Addrepas}>{Show_Data}</button>}
    </div>
  )
}