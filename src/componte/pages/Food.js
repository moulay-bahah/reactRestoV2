import Header from "../header/Header"
import FoodIteme from "../FoodIteme/FoodIteme"
// import { CategorieData } from "../../Data/Data"
import { useParams } from "react-router-dom"
import {useEffect,useState} from "react"
import axios from 'axios';
import {axiosConf} from "../../axios-config"


export default function Food() {

  const [data, setData] = useState([]);
  const {id} = useParams()
  // const intId = +id.substring(1)
  // console.log(intId)
  useEffect(() => {
        axios.get(`http://localhost:30001/food/?caterogy_food_id=${id}`).then(res =>{
        setData(res.data);
      })
  }, []);
  console.log(data)
  return (
    <div className="main">
      <Header titel="Food" Show_Data="Add +"  />
      <div className="contenair-food">
      {data.map((dat) => <FoodIteme {...dat} key={dat.id} /> )}
      </div>
    </div>
  )
}