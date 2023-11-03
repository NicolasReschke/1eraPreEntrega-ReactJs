import NavBar from './components/NavBar/NavBar.jsx'
import Titulo from './components/Titulo/Titulo.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Formulario from './components/FormContainer/Formulario.jsx'
import FormContainer from './components/FormContainer/FormContainer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './components/FormContainer/Formulario.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/CartWidget/CartWidget.css'
import './components/NavBar/NavBar.css'


const onAdd = cant => {
  console.log(cant);
}

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
      {/* <Formulario /> */}
      <ItemListContainer saludo="Bienvenidos!!!" />
      <FormContainer/>
    </>
  )
}

export default App
