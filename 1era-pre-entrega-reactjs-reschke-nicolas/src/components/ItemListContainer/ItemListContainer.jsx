import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";

import "./ItemListContainer.css"

function ItemListContainer({saludo = "saludo por defecto"}) {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { cid } = useParams()

    useEffect (()=>{
        if (cid){
            mFetch()
            .then(resultado => setProducts(resultado.filter(product=>product.category === cid)))
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }else {
            mFetch()
            .then(resultado => setProducts(resultado))
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }
    }, [cid])
console.log(products)


    return (
        <>
            <p className="parrafoBienvenida">{saludo}</p>
            { loading ? 
                <Loading />
            :
            <div className="row justify-content-center">
                <ItemList products={products} />
            </div>
            }
        </>
    )
}

export default ItemListContainer