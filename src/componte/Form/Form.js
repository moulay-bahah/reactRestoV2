
import './Form.css'

export default function Form() {

  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="nomber"
          name="nomber"
        />
        <input
          type="text"
          placeholder="emploie"
          name="emploie"
        />
        <div className="selec-cont">
          <select 
            name="paiement"
            >
              <option value="red">Bankily</option>
              <option value="orange">Sedade</option>
              <option value="yellow">Amanti</option>
              <option value="green">Cash</option>
          </select>
          <select 
            name="Validation"
            >
              <option value="red">Valider</option>
              <option value="orange">Non Va</option>
          </select>
        </div>
        <button>
          Enregistre
        </button>
      </form>
    </div>
  )
}