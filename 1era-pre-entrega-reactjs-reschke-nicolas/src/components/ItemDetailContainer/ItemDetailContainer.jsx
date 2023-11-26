import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { mFetch } from "../../helpers/mFetch"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";

import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ] = useState(true)

    const {pid} = useParams()

    
    useEffect(()=>{
        mFetch(pid)
        .then(resultado => setProduct(resultado))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }, [])
    

    return (
        <>
            { loading ?
                <Loading />
            :
                <ItemDetail product={product} />
            }
        </>
    )
}
