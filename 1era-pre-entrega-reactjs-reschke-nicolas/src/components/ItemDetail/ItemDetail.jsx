import { useCartContext } from "../../contexts/CartContext";
import { ItemCounter } from "../ItemCounter/ItemCounter";

export const ItemDetail = ({product}) => {

    const {addToCart} = useCartContext()

    const onAdd = cant => {
        console.log("cantidad: ", cant);
        addToCart ( { ...product, cant })
        }

    return (
        <div className="row">
            <div className="col-6 mt-5">
                <img src={product.img} alt="" className="imgDetail"/>
            </div>
            <div className="col-6 text-center mt-5">
                <p>Nombre: {product.name}</p>
                <p>Categoría {product.category}</p>
                <p>Detalles {product.description}</p>
                <p>Precio: $ {product.price}</p>
                <ItemCounter initial={1} stock={15} onAdd={onAdd}/> 
            </div>            
        </div>
    )
}
