import Header from "../header/Header"
import Iteme from "../iteme/Iteme"
// import FoodCtegori from "../../componte/FoodCtegori/FoodCtegori"
// import FoodIteme from "../../componte/FoodIteme/FoodIteme"
// import Form from "../../componte/Form/Form"


export default function Home() {

  

  return (
    <div className="main">
      <Header titel="Les places" Show_Data="Show Data"  />
      <div className="contenair">
        <Iteme />
        <Iteme />
        <Iteme />
        <Iteme />
        <Iteme />
        <Iteme />
      </div>
    </div>
  )
}