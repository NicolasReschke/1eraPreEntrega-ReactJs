import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";

import "./ItemListContainer.css"
import FormContainer from "../FormContainer/FormContainer";

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


    return (
        <>
            <p className="parrafoBienvenida">{saludo}</p>
            { loading ? 
                <Loading />
            :
            <div className="row justify-content-center">
                <ItemList products={products} />
                <FormContainer />
            </div>
            }
        </>
    )
}

export default ItemListContainer