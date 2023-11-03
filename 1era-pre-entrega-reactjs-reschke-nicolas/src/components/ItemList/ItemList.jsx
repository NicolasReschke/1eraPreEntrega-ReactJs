import { Link } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { Filter } from "./Filter";

import "./ItemList.css"


const onAdd = cant => {
    console.log(cant);
}

const productFiltered = ({products, filterState, handleFilterChange}) => (
    <>
        <div>
            <h3>¿Qué estas buscando?</h3>
            <input 
                type="text"
                placeholder="Buscar"
                className="me-2 searchBar"
                aria-label="Search"
                value={filterState} 
                onChange={handleFilterChange} 
                />
        </div>
        {
            filterState === "" ?

            products.map(product=> 
                <div key={product.id} className="card w-25 asdasd">
                        <img src={product.img} className="card-img-top img" alt=""/>
                    <div className="card-body">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Precio: {product.price}</p>
                        <div>
                            <ItemCounter onAdd={onAdd}/>
                        </div>
                        <Link to={`/detail/${product.id}`} className="card-footer">
                            <button className="btn w-100">Detalle</button>
                        </Link>
                    </div>
                </div>
            )
        :
        
            products
            .filter(prod => prod.name.toLowerCase().includes(filterState.toLowerCase()))
            .map(product=> 
                <div key={product.id} className="card w-25 asdasd">
                        <img src={product.img} className="card-img-top img" alt=""/>
                    <div className="card-body">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Precio: {product.price}</p>
                        <div>
                            <ItemCounter onAdd={onAdd}/>
                        </div>
                        <Link to={`/detail/${product.id}`} className="card-footer">
                            <button className="btn w-100">Detalle</button>
                        </Link>
                    </div>
                </div>
            )
        }
    </>
)

export const ItemList = ({products}) => {
    return (
            <Filter products= {products}>
                { productFiltered }
            </Filter>
    )
}