import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../contexts/CartContext';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        email2: ''
    });

    const [isId, setIsId] = useState("")
    const { cartList, emptyCart, totalPrice } = useCartContext()

    const finishOrder = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.items = cartList.map( ( {id, price, cant, name} ) => ( { id: id, price: price, name: name, cant: cant } ) )
        order.total = totalPrice()

        if (formData.email !== formData.email2) {
            alert('Los correos electrónicos deben ser iguales!!')
            return
        }

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
        <div>
            {isId ? (
            <div>
                <h2>
                    El id de la compra es: <br />
                    <strong>{isId}</strong>
                </h2>
                <Link to={'/'} >
                    <button className='btn btn-success'>⬅ Volver a la tienda</button>
                </Link>
                <img className='tyBuy' src="/assets/sample3.gif" alt="" />
            </div>
            ) : (
                <>
                    <OrderSummary />
                    <form onSubmit={finishOrder}>
                        <div className='labelClass'>
                            <label>Ingrese su nombre: </label>
                            <input type="text" name='name' required onChange={handleOnChange} value={formData.name} />
                        </div>
                        <div className='labelClass'>
                            <label>Ingrese su celular: </label>
                            <input type="text" name='phone' required onChange={handleOnChange} value={formData.phone} />
                        </div>
                        <div className='labelClass'>
                            <label>Ingrese su email: </label>
                            <input type="email" name='email' required onChange={handleOnChange} value={formData.email} />
                        </div>
                        <div className='labelClass'>
                            <label>Reingresar su email: </label>
                            <input type="email" name='email2' required onChange={handleOnChange} value={formData.email2} />
                        </div>
                        <button className='btn btn-primary'>
                            Terminar compra ✔
                        </button>
                    </form>
                </>
            )}
        </div>
    )
}

export default OrderForm;