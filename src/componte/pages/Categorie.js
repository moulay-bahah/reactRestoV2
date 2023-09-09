import Header from "../header/Header"
import FoodCtegori from "../FoodCtegori/FoodCtegori"
// import { CategorieData } from "../../Data/Data"
//{CategorieData.map((cato)=> <FoodCtegori {...cato} key={cato.id} />)}
import {useEffect,useState} from "react"
import axios from 'axios';

export default function Categorie() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/CategorieData');

        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  let CategorieData = data
  return (
    <div className="main">
      <Header titel="Food" Show_Data="" />
      <div className="contenair-food">
      {CategorieData.map((cato)=> <FoodCtegori {...cato} key={cato.id} />)}
      </div>
    </div>
  )
}