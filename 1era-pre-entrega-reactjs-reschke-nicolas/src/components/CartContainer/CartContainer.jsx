import { useCartContext } from '../../contexts/CartContext';

import './CartContainer.css'

export const CartContainer = () => {

    const { cartList, emptyCart } = useCartContext()
    console.log(cartList);

    return (
        <div>
            { cartList.map(product => <div className="divCart">
                                        <img className="imgCart" src={product.img} alt= {product.name} />
                                            <strong>
                                                {product.name}
                                            </strong>
                                            <div>
                                                Cantidad de docenas: {product.cant}
                                            </div>
                                            <div>
                                                Precio: {product.price*product.cant}
                                            </div>
                                            <button className="btn btn-danger">
                                                Eliminar <br />
                                                este producto
                                            </button>
                                    </div> ) }
                                    <hr/>
                                    <h3>Precio Total:</h3> 
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

