import Header from "../header/Header"
// import Iteme from "../../componte/iteme/Iteme"
// import FoodCtegori from "../../componte/FoodCtegori/FoodCtegori"
// import FoodIteme from "../../componte/FoodIteme/FoodIteme"
import Form from "../Form/Form"

export default function PageForm() {

  return (
    <div className="main">
      <Header titel="Food" />
      <div className="contenair-form">
        <Form />
      </div>
    </div>
  )
}