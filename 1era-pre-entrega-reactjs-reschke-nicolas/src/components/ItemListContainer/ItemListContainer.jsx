import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemCounter } from "../ItemCounter/ItemCounter"


const onAdd = cant => {
    console.log(cant);
}

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
            products.map(product=> 
                                    <div className="card w-25 h-100">
                                        <div className="card">
                                            <img src={product.img} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body">
                                            <h3>Nombre: {product.name}</h3>
                                            <p>Categoría: {product.category}</p>
                                            <p>Precio: {product.price}</p>
                                            <div>
                                                <ItemCounter onAdd={onAdd}/>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn w-100">Detalle</button>
                                            </div>
                                        </div>
                                    </div>
            )}
        </>
    )
}

export default ItemListContainer