import Header from "../header/Header"
import { useNavigate } from 'react-router-dom';
// import FoodCtegori from "../../componte/FoodCtegori/FoodCtegori"
// import FoodIteme from "../../componte/FoodIteme/FoodIteme"
// import Form from "../../componte/Form/Form"


export default function Home() {
  const navigate = useNavigate()
  const NavigerversFood=()=>{
    navigate('/Categorie')
  }

  return (
    <div className="main">
      <Header titel="Les places" Show_Data="Show Data"  />
      <div className="contenair">
        <button onClick={NavigerversFood}>
          Save order
        </button>
      </div>
    </div>
  )
}