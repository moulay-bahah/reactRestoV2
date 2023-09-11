import Header from "../header/Header"
// import Iteme from "../../componte/iteme/Iteme"
// import FoodCtegori from "../../componte/FoodCtegori/FoodCtegori"
// import FoodIteme from "../../componte/FoodIteme/FoodIteme"
import FormUpDate from "../FormUpDate/FormUpDate"

export default function PageUpdateForm() {


  return (
    <div className="main">
      <Header titel="Up date" />
      <div className="contenair-form">
        <FormUpDate />
      </div>
    </div>
  )
}