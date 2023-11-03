import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mFetch"
import { ItemCounter } from "../ItemCounter/ItemCounter"

const onAdd = cant => {
    console.log(cant);
    }

export const ItemDetailContainer = () => {
    const [ product, setProducts ] = useState({})
    const { pid } = useParams()
    
    console.log(pid)
    
    
    return (
        <div className="row">
            <div className="col-6 mt-5">
                <img src={product.img} alt="" className="img-fluid"/>
            </div>
            <div className="col-6 text-center mt-5">
                <p>Nombre: {product.name}</p>
                <p>Category: {product.category}</p>
                <p>Precio: {product.price}</p>
                <ItemCounter initial={1} stock={5} onAdd={onAdd}/> 
            </div>            
        </div>
    )
}