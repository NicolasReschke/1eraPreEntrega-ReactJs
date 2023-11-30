import React from 'react';
import { useCartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
    const { totalPrice, emptyCart } = useCartContext()

    return (
        <div className='totalClass'>
            {totalPrice() !== 0 && <h3>
                                    Precio total: $ {totalPrice()}
                                    <div className='buttonClass'>
                                        <Link
                                            to= {'/'} >
                                            <button
                                                className="btn btn-success">
                                                ⬅ Seguir comprando...
                                            </button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={emptyCart}>
                                            ❗ Vaciar carrito
                                        </button>
                                    </div>
                                </h3>}

            {totalPrice() === 0 && <h3>
                                    Tu carrito está vacío 😓
                                    <br />
                                    <Link
                                        to= {'/'}>
                                        <button className="btn btn-success">
                                            Volver a la tienda...
                                        </button>
                                    </Link>
                                </h3>}
        </div>
    )
}

export default OrderSummary;