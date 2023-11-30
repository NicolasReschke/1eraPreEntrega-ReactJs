import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx'
import Title from './components/Title/Title.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import CartContainer from './components/CartContainer/CartContainer.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/CartWidget/CartWidget.css'
import './components/NavBar/NavBar.css'


function App() {

    const titleApp= "PastaLú"
    const subtitleApp= "Expertos en pastas"

    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Title
                    title={titleApp}
                    subTitle={subtitleApp}
                />
                <Routes>
                    <Route path='/' element={<ItemListContainer saludo="Bienvenidos!!!" /> } />
                    <Route path='/category/:cid' element={<ItemListContainer saludo="Las mejores pastas, al mejor precio!!" /> } />
                    <Route path='/detail/:pid' element={<ItemDetailContainer /> } />
                    <Route path='/cart' element={<CartContainer /> } />
                    <Route path='*' element={<Navigate to='/' /> } />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App
