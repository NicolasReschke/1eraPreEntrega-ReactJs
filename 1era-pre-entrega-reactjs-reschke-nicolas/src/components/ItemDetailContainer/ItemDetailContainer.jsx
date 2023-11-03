import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { mFetch } from "../../helpers/mFetch"

const onAdd = cant => {
    console.log(cant);
    }

export const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const {pid} = useParams()

    useEffect(()=>{
        mFetch(pid)
        .then(resultado => setProduct(resultado))
        .catch(error => console.log(error))
        // .finally(()=> setLoading(false))
    }, [])
        
    return (
        <div className="row">
            <div className="col-6 mt-5">
                <img src={product.img} alt="" className="img-fluid"/>
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
