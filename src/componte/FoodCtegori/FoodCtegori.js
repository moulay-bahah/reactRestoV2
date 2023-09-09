import food from "../../assets/images/pizza-icon.png";
import "./FoodCtegori.css";
import { useNavigate } from "react-router-dom";

export default function FoodCtegori({ name, img, id }) {
  const navigate = useNavigate();

  const NavigerversFood = (id) => {
    navigate(`/Food/${id}`);
  };

  return (
    <div className="food-ctegori">
      <p>{name}</p>
      <div>
        <img src={`http://localhost:3000/${img}`} alt="food_icon" />
      </div>
      <button onClick={() => NavigerversFood(id)}>Plus</button>
    </div>
  );
}
