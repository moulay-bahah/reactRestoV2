import {  useState } from "react";
import "./Addfood.css"; 
import { useNavigate, useParams } from "react-router-dom";
import { axiosConf } from '../../axios-config';
import axios from "axios";

// retrive id  usung useParams, id = food categorie id
//  retrive data to save from 
// id food will be generated auto
// post data to json server
// /food


export default function Addfood() {

  const{id} = useParams()
  //categorie_food_id
  const [newdata, setNewData] = useState({
    name: "",
    prix: 0,
    img: "", 
    caterogy_food_id: id,
    //categorie_food_id:id
  });
 
  const Navigate = useNavigate()


  function handleChange(event) {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  



   function handleSubmit(event) {
    event.preventDefault();
     axios.post(`http://localhost:30001/food`, newdata)
    .then(
      d => console.log(d)
      )
      .catch(
        e => console.log(e)
        )
    Navigate(`/Food/${id}`)
      
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          name="name"
          onChange={handleChange}
          value={newdata.name}
        />
        <input
          type="number"
          placeholder="Prix"
          name="prix"
          onChange={handleChange}
          value={newdata.prix}
        />
        <input
          type="file"
          accept="image/*"
          name="img"
          onChange={handleChange}
          value={newdata.img}
        />

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
