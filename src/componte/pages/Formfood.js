import Header from "../header/Header"
// import Iteme from "../../componte/iteme/Iteme"
// import FoodCtegori from "../../componte/FoodCtegori/FoodCtegori"
// import FoodIteme from "../../componte/FoodIteme/FoodIteme"
import AddFood from "../AddFood/Addfood"

export default function Formfood() {
  
  return (
    <div className="main">
      <Header titel="Food" />
      <div className="contenair-form">
        <AddFood />
      </div>
    </div>
  )
}