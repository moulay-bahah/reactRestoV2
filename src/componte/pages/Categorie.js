import Header from "../header/Header"
import FoodCtegori from "../FoodCtegori/FoodCtegori"
// import { CategorieData } from "../../Data/Data"
//{CategorieData.map((cato)=> <FoodCtegori {...cato} key={cato.id} />)}
import {useEffect,useState} from "react"
import axios from 'axios';
import {CategorieData} from "./categorie-data"

export default function Categorie() {

 
   

   
  return (
    <div className="main">
      <Header titel="Food" Show_Data="" />
      <div className="contenair-food">
      {CategorieData.map((cato)=> <FoodCtegori {...cato} key={cato.id} />)
      
      }
      </div>
    </div>
  )
}