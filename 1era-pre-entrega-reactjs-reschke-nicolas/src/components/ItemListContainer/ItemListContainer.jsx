import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import FormContainer from "../FormContainer/FormContainer";

import "./ItemListContainer.css"

function ItemListContainer({saludo = "saludo por defecto"}) {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { cid } = useParams()

    useEffect (()=>{
            const dbFirestore = getFirestore()
            const queryCollection = collection(dbFirestore, 'products')
            
            const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection

            getDocs(queryFilter)
            .then(res => { setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))) })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [cid])
    
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