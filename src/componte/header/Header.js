import logo from '../../assets/images/logo.jpg';
import './Header.css'
import { useNavigate } from 'react-router-dom';

export default function Header({ titel, Show_Data}) {


  const navigate = useNavigate()
  function Addrepas() {
    if(Show_Data === "Add +") {
      navigate('/Formfood')
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