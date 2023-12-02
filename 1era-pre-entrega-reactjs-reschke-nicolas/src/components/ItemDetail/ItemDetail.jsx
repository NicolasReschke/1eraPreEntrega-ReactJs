import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../contexts/CartContext";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

import './ItemDetail.css'

export const ItemDetail = ({product}) => {
    const [ isCount, setIsCount ] = useState(true)
    const {addToCart} = useCartContext()
    const [like, setLike] = useState(false)

    useEffect(() => {
        const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || {};
        setLike(likedProducts[product.id] || false);
    }, [product.id])

    const onAdd = cant => {
        addToCart ( { ...product, cant })
        setIsCount(false)
    }
    
    const handleLike = () => {
        setLike(!like);
        localStorage.setItem('likedProducts', JSON.stringify({ [product.id]: !like }));
    }

    return (
        <div className="row classItemDetail">
            <div className="col-6">
                <img src={product.img} alt="" className="imgDetail" />
                <button className="btn btn-outliner imgLike" onClick={handleLike}>
                    {like ? '❤️' : '🤍'}
                </button>
            </div>
            <div className="col-6 text-center mt-5">
                <div>
                    <strong>{product.name}</strong> 
                </div>
                <p>Categoría: {product.category}</p>
                <p>Detalle: {product.description}</p>
                <p>Precio: $ {product.price}</p>
                {
                    isCount ?
                        <>
                            <ItemCounter initial={1} stock={15} onAdd={onAdd}/>
                            <Link className="btn btn-primary buttonItemDetail" to='/' >Volver a la tienda!</Link>
                        </>
                    :
                        <>
                            <Link className="btn btn-primary buttonItemDetail" to='/' >Seguir comprando</Link>
                            <Link className="btn btn-success buttonItemDetail" to='/cart' >Ir al carrito de compras</Link>
                        </>
                }
            </div>
                <RelatedProducts currentCategoryId={product.category} productId={product.id} />
        </div>
    )
}
