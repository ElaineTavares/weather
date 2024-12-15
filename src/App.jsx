import './App.css'
import Busca from './components/Busca'
import ClimaAtual from './components/ClimaAtual'
import Previsao from './components/Previsao'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from './components/Footer'

function App() {
  const [cidade, setCidade] = useState("")
  const [clima, setClima] = useState(null)
  const [previsao, setPrevisao] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY || "";
  console.log(apiKey)

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) =>{
      console.log(position)
  
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
  
      const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
    
      setCidade(resposta.data.name)
      setClima(resposta.data)
    })
    
   }, [apiKey])
   

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      )

      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      )

      setClima(respostaClima.data)

      setPrevisao(respostaPrevisao.data.list.slice(0, 5))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='app'>
      <h1>Condições Climáticas</h1>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima}/>
      {clima && <ClimaAtual clima={clima}/>}
      <div className='container-previsao'>
        {previsao.length > 0 && <Previsao previsoes={previsao}/> } 
      </div>
      <Footer/>
    </div>
  )
}

export default App
