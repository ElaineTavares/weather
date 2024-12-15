import PropTypes from 'prop-types';
import "./Busca.css"

export default function Busca({cidade, setCidade, buscarClima}) {
  return (
    <div className='busca'>
        <input 
          type="text" 
          value={cidade} 
          onChange={(e) => setCidade(e.target.value)} 
          placeholder="Digite uma cidade" 
        />
        <button onClick={buscarClima}>buscar</button>
    </div>
  )
}

Busca.propTypes = {
  cidade: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCidade: PropTypes.arrayOf(PropTypes.string).isRequired,
  buscarClima: PropTypes.arrayOf(PropTypes.string).isRequired,
};
