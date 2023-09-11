import "./FormUpDate.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {axiosConf} from "../../axios-config"

export default function FormUpDate() {
  const { id } = useParams();
  // let v=true
//   useEffect(() => {
//     axiosConf.get(`/food/?id=${id}`).then(res =>{
//     setData(res.data);
//   })
// }, []);


// const [prevInfo,setPrevInfo] =useState({})
// let list=prevInfo
  const [newInfo, setNewInfo] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:30001/info/${id}`)
    
      .then(res => {
        setNewInfo((pr) => ({
        ...pr,
        ...res.data,
        Montant : res.data.nomber * res.data.Prix
        })
        )
      });
      
  },[])


  function handleChange(event) {
    const { name, value } = event.target;
      setNewInfo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setNewInfo((prevData) => ({
        ...prevData,
        Montant : prevData.nomber * prevData.Prix,
      }));
  }




  console.log(newInfo)


//   useEffect(() => {
//     axios.get(`http://localhost:30001/food/${id}`).then(res =>{
//     setNewInfo((prevData) => ({
//       ...prevData,
//       Montant: newInfo.nomber * res.data.prix,
//       demandes : res.data.name,
//       Prix:res.data.prix,
//     }));
//   })
// }, [newInfo.nomber]);
  

  const Navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault();
    
    axios.put(`http://localhost:30001/info/${id}`, newInfo)
    Navigate("/Info")
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="nomber"
          name="nomber"
          onChange={handleChange}
          value={newInfo.nomber}
        />
        <input
          type="text"
          placeholder="emploie"
          name="emploie"
          onChange={handleChange}
          value={newInfo.emploie}
        />
        <input
          type="date"
          placeholder="date"
          name="date"
          onChange={handleChange}
          value={newInfo.date}
        />
        <div className="selec-cont">
          <select name="Place" onChange={handleChange} value={newInfo.Place}>
            <option value="Place 1">Place 1</option>
            <option value="Place 2">Place 2</option>
            <option value="Place 3">Place 3</option>
            <option value="Place 4">Place 4</option>
            <option value="Place 5">Place 5</option>
            <option value="VIP">VIP</option>
          </select>
          <select name="Table" onChange={handleChange} value={newInfo.Table} >
            {Array.from({ length: 40 }, (_, i) => (
              <option key={i} value={`Table ${i + 1}`}>
                Table {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="selec-cont">
          <select name="paiement" onChange={handleChange} value={newInfo.paiement}>
            <option value="Bankily">Bankily</option>
            <option value="Sedade">Sedade</option>
            <option value="Amanti">Amanti</option>
            <option value="Cash">Cash</option>
          </select>
          <select name="Validation" onChange={handleChange} value={newInfo.Validation}>
            <option value="Valider">Valider</option>
            <option value="Non Va">Non Va</option>
          </select>
        </div>

        <button>Update</button>
      </form>
    </div>
  );
}
