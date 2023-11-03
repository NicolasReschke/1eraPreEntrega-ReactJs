import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "../ItemList/ItemList";

import "./ItemListContainer.css"




function ItemListContainer({saludo = "saludo por defecto"}) {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect (()=>{
        mFetch()
        .then(resultado => setProducts(resultado))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))

    }, [])
console.log(products)


    return (
        <>
            <p className="parrafoBienvenida">{saludo}</p>
            { loading ? <img src="/assets/sample.gif" alt="" />
            :
            <div className="row justify-content-center">
                <ItemList products={products} />
            </div>
            }
        </>
    )
}

export default ItemListContainer