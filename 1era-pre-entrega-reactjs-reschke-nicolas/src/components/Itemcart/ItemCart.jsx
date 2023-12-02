import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"

export const ItemCart = ( {product} ) => {
    const { addItem, deleteItem, deleteItems } = useCartContext()
    return(
        <div key={product.id} className="divCart">
            <Link to={`/detail/${product.id}`}>
                <img className="imgCart" src={product.img} alt= {product.name} />
            </Link>
            <strong>
                {product.name}
            </strong>
            <div>
                <button 
                    className="btn btn-danger buttonClass"
                    onClick= {() => addItem(product.id)}
                >
                    ➕
                </button>
                Cantidad: <strong>{product.cant}</strong>
                <button 
                    className="btn btn-danger buttonClass"
                    onClick= {() => deleteItem(product.id)}
                >
                    ➖
                </button>
            </div>
            <div>
                Precio: <strong>${product.price*product.cant}</strong>
            </div>
            <button 
                className="btn btn-danger"
                onClick= { ()=> deleteItems(product.id) }
            >
                ✖
            </button>
        </div>
    )
}