// import img from '../../assets/images/pizza-icon.png';
import './FoodIteme.css'
import { useNavigate } from 'react-router-dom';

export default function FoodIteme({ name, img, prix }) {
  const navigate = useNavigate()

  const NavigerversForm=()=>{
    navigate('/Form')
  }

  return (
    <div className="food-iteme">
      <p>
        {name} : cost {prix} UM
      </p>
      <div>
      <img src={img} alt="food_icon" />
      </div>
      <button onClick={NavigerversForm}>
        Demander
      </button>
    </div>
  )
}