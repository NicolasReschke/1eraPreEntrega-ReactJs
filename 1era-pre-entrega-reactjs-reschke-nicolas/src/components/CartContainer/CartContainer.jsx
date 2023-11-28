import { useState } from 'react';
import { Link } from 'react-router-dom';

import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../contexts/CartContext';

import './CartContainer.css'

export const CartContainer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        email2: ''
    })

    const [isId, setIsId] = useState("")
    const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext()

    const finishOrder = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.items = cartList.map( ( {id, price, cant, name} ) => ( { id: id, price: price, name: name, cant: cant } ) )
        order.total = totalPrice()

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(({ id }) => setIsId(id))
        .catch (err => console.log(err))
        .finally(()=> {
            setFormData({
                name:'',
                phone:'',
                email:'',
                email2:''
            })
            emptyCart()
        })
    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <>
            {isId !== "" && <h2> El id de la compra es: {isId} </h2>}
            {cartList.length == 0 ?
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link to='/' >Volver a la tienda</Link>
                </>
                :
                <div>
                    { cartList.map(product => <div key={product.id} className="divCart">
                                                <img className="imgCart" src={product.img} alt= {product.name} />
                                                    <strong>
                                                        {product.name}
                                                    </strong>
                                                    <div>
                                                        Cantidad: {product.cant}
                                                    </div>
                                                    <div>
                                                        Precio: {product.price*product.cant}
                                                    </div>
                                                    <button 
                                                        className="btn btn-danger"
                                                        onClick= {() => deleteItem(product.id)}
                                                    >
                                                        Eliminar <br />
                                                        producto
                                                    </button>
                                            </div> ) }
                                            <hr/>
                                            <div className='totalAndformClass'>
                                                <div className='totalClass'>
                                                    { totalPrice()!== 0 && <h3>Precio total: $ {totalPrice()} </h3> }
                                                    { totalPrice() == 0 && <h3>Tu carrito está vacío</h3> }
                                                    <div className='buttonClass'>
                                                        <button className="btn btn-success">
                                                            <Link className='btn'
                                                                to={'/'}
                                                            >
                                                                    ⬅ Seguir comprando...
                                                            </Link>
                                                        </button>
                                                        <button 
                                                            className="btn btn-danger"
                                                            onClick= {emptyCart}
                                                        >
                                                                Vaciar carrito
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <form onSubmit={finishOrder}>
                                                        <div className='labelClass'>
                                                            <label>Ingres su nombre: </label>
                                                            <input type="text" name='name' required onChange={handleOnChange} value={formData.name} />
                                                        </div>
                                                        <div className='labelClass'>
                                                            <label>Ingrese su celular: </label>
                                                            <input type="text" name='phone' required onChange={handleOnChange} value={formData.phone} />
                                                        </div>
                                                        <div className='labelClass'>
                                                            <label>Ingrese su email: </label>
                                                            <input type="text" name='email' required onChange={handleOnChange} value={formData.email} />
                                                        </div>
                                                        <div className='labelClass'>
                                                            <label>Repetir su email: </label>
                                                            <input type="text" name='email2' required onChange={handleOnChange} value={formData.email2} />
                                                        </div>
                                                        <button>Terminar compra</button>
                                                    </form>
                                                </div>
                                            </div>
                </div>
            }
        </>
    )
}

