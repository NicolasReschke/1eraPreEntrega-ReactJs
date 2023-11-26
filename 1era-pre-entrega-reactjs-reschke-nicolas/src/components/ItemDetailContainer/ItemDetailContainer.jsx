import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { mFetch } from "../../helpers/mFetch"

import './ItemDetailContainer.css'
import { ItemDetail } from "../ItemDetail/ItemDetail";

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
        <>
            <ItemDetail product={product} />
        </>
    )
}
