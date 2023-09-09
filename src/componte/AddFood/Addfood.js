import { useEffect, useState } from "react";
import "./Addfood.css";
import axios from "axios";
import { useParams } from "react-router-dom";

// retrive id  usung useParams, id = food categorie id
//  retrive data to save from 
// id food will be generated auto
// post data to json server
// /food


export default function Addfood() {

  const{id} = useParams()
  const [newdata, setNewData] = useState({
    name: "",
    prix: 0,
    img: "/assets/images/pizza-icon.png",
    caterogy_food_id: id,
  });

  const [selectedImage, setSelectedImage] = useState(null);


  function handleChange(event) {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  



  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`http://localhost:3001/food`, newdata)
      
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
        />

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
