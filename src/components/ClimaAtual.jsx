import PropTypes from 'prop-types';
import './ClimaAtual.css'

export default function ClimaAtual({clima}) {
  return (
    <div className='clima-atual'>
        <h3>{clima.name}</h3>
        <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt={clima.weather[0].description} />
        <p>{clima.main.temp}°C</p>
        <p>{clima.weather[0].description}</p>
    </div>
  )
}

ClimaAtual.propTypes = {
  clima: PropTypes.arrayOf(PropTypes.string).isRequired,
};