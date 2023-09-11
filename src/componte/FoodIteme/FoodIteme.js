// import img from '../../assets/images/pizza-icon.png';
import './FoodIteme.css'
import { useNavigate } from 'react-router-dom';

export default function FoodIteme({ name, img, prix,id }) {
  const navigate = useNavigate()

  // `/Form/${id}`
  const NavigerversForm=()=>{
    navigate(`/Form/${id}`)
  }
  console.log(id)

  return (
    <div className="food-iteme">
      <p>
        {name} : cost {prix} UM
      </p>
      <div>
      <img src={"http://localhost:3000/" + img} alt="food_icon" />
      </div>
      <button onClick={NavigerversForm}>
        Demander
      </button>
    </div>
  )
}