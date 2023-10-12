import NavBar from './components/NavBar/NavBar.jsx'
import Titulo from './components/Titulo/Titulo.jsx'
import Formulario from './components/Formulario/Formulario.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'
import './components/NavBar/NavBar.css'
import './components/Formulario/Formulario.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/CartWidget/CartWidget.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const tituloApp= "PastaLú"
  const subtituloApp= "Expertos en pastas"

  return (
    <>
      <NavBar />
      <Titulo
        titulo={tituloApp}
        subTitulo={subtituloApp}
      />
      <ItemListContainer saludo="Bienvenidos!!!" />
      <Formulario />
    </>
  )
}

export default App
