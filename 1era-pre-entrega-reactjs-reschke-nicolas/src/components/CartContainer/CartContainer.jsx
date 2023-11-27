import { addDoc, collection, getFirestore } from 'firebase/firestore';

import { useCartContext } from '../../contexts/CartContext';

import './CartContainer.css'

export const CartContainer = () => {

    const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext()

    const finishOrder = () => {
        const order = {}
        order.buyer = { name: 'asdasdsa' }
        order.items = cartList.map( ( {id, price, cant, name} ) => ( { id: id, price: price, name: name, cant: cant } ) )
        order.total = totalPrice()

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(res => console.log(res))
        .catch (err => console.log(err))
    }

    return (
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
                                    <h3>Precio Total: $ {totalPrice()}</h3> 
                                    <button 
                                        className="btn btn-outline-danger"
                                        onClick= {emptyCart}
                                    >
                                            Vaciar carrito
                                    </button>
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={finishOrder}
                                    >
                                            Terminar compra
                                    </button>
        </div>
    )
}

