import './Iteme.css'
import { useNavigate } from 'react-router-dom';
// import Food from "./componte/pages/Food"


export default function Iteme() {
  const navigate = useNavigate()

  const NavigerversFood=()=>{
    navigate('/Categorie')
  }

  let options = []
  for (let i = 1; i < 41; i++) {
    options.push(i)
  }

  return (
    <div className="item">
    <p><span>place</span><span>1</span></p>
    <select name="table" id="">
      {options.map( (op) => <option value={`${op}`}>{op}</option>)}
    </select>
    

    <button onClick={NavigerversFood}>select</button>
    
    
  </div>
  )
}