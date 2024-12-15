import PropTypes from 'prop-types';
import './Previsao.css'

export default function Previsao({previsoes}) {
  return (
    <div className='previsao'>
        <h4>Previsão para as próximas horas</h4>
        <ul>
          {previsoes.map((previsao) => (
            <li key={previsao.dt}>
               <img src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`} 
               alt={previsao.weather[0].description} 
               />
               <p>{previsao.dt_txt}</p>
               <p>{previsao.main.temp}°C - {previsao.weather[0].description}</p>
            </li>
          ))}   
        </ul>
    </div>
  )
}

Previsao.propTypes = {
  map: PropTypes.arrayOf(PropTypes.string).isRequired,
  previsoes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
