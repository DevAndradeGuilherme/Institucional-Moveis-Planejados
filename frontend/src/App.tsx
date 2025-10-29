import { Navbar } from './components/Navbar'
import { Ambientes } from './pages/Ambientes'
import { Contatos } from './pages/Contatos'
import { Home } from './pages/Home'
import { Instalacao } from './pages/Instalacao'
import { Sobre } from './pages/sobre'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Sobre/>
      <Ambientes/>
      <Instalacao/>
      <Contatos/>
    </>
  )
}

export default App
