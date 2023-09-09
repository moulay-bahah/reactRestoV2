// import { useEffect, useState } from "react";
// import './Addfood.css';
// import axios from 'axios';

// export default function Addfood() {
//   // const [Data, setData] = useState([]);
//   const [newdata, setNewData] = useState({
//     name: "pizza 1",
//     prix: 200,
//     img: "/assets/images/pizza-icon.png"
//   });
//   const [selectedCategory, setSelectedCategory] = useState(1);

//   // useEffect(() => {
//   //   axios.get(`http://localhost:3000/CategorieData/${selectedCategory}`)
//   //     .then(res => {
//   //       setData(res.data.childer);
        
//   //     })
//   //     .catch(error => {
//   //       console.error("Error fetching data:", error);
//   //     });
//   // }, []);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNewData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   }
//   // console.log(Data)

//   function handleSelectChange(event) {
//     const value = event.target.value;
//     setSelectedCategory(value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     // Récupérez les données actuelles de la catégorie sélectionnée
//     axios.get(`http://localhost:3000/CategorieData/${selectedCategory}`)
//       .then(res => {
//         const updatedData = [...res.data.childer, newdata];

//         // Mettez à jour le tableau cheldren sur le serveur
//         axios.put(`http://localhost:3000/CategorieData/${selectedCategory}`, { childer: updatedData})
//           .then(() => {
//             // Mettez à jour l'état local si nécessaire
//            // setData(updatedData);
//            console.log("sebon")
//           })
//           .catch(error => {
//             console.error("Error updating data:", error);
//           });
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   return (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nom"
//           name="name"
//           onChange={handleChange}
//           value={newdata.name}
//         />
//         <input
//           type="text"
//           placeholder="Prix"
//           name="prix"
//           onChange={handleChange}
//           value={newdata.prix}
//         />
//         <div className="selec-cont">
//           <select
//             name="paiement"
//             onChange={handleSelectChange}
            
//           >
//            <option value={1}>pizza</option>
//             <option value={2}>habrger</option>
//             <option value={3}>chawrme</option>
//             <option value={4}>caffe</option>
//             <option value={5}>juise</option>
//             <option value={6}>tacos</option>
//             <option value={7}>milkcheeck</option>
//             <option value={8}>kebab</option>
//           </select>
//         </div>
//         <button type="submit">
//           Enregistrer
//         </button>
//       </form>
//     </div>
//   );
// }
