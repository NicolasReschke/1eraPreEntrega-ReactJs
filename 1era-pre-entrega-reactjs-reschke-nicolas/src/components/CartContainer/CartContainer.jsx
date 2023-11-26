import { useCartContext } from '../../contexts/CartContext';

import './CartContainer.css'

export const CartContainer = () => {

    const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext()

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
                                    >
                                            Terminar compra
                                    </button>
        </div>
    )
}

