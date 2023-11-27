import { Link } from "react-router-dom"

import { ItemCounter } from "../ItemCounter/ItemCounter"
import { useCartContext } from "../../contexts/CartContext"

import './Item.css'

export const Item = ({product}) => {

    const {addToCart} = useCartContext()

    const onAdd = cant => {
        addToCart ( { ...product, cant })
        }
    
    return (
        <div className="card w-25 classCard">
                        <img src={product.img} className="card-img-top img" alt=""/>
                    <div className="card-body">
                        <h3>{product.name}</h3>
                        <p>Precio: $ {product.price}</p>
                        <div>
                            <ItemCounter initial={1} stock={15} onAdd={onAdd}/>
                        </div>
                        <Link to={`/detail/${product.id}`} className="card-footer">
                            <button className="btn w-60 btn btn-outline-primary">Detalle</button>
                        </Link>
                    </div>
                </div>
    )
}
