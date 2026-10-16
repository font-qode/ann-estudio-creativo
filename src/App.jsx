import './App.css'
import AnnSystems from './components/AnnSystems/AnnSystems'
import Estudio from './components/Estudio/Estudio'
import Hablemos from './components/Hablemos/Hablemos'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Servicios from './components/Servicios/servicios'
import Trabajos from './components/Trabajos/Trabajos'

function App() {
  
  return (
    <>
      < Header />
      < Hero />
      < Estudio />
      < Servicios />
      < AnnSystems />
      < Trabajos />
      < Hablemos />
    </>
  )
}

export default App
