import { Filter } from "./Filter";
import { Item } from "../Item/Item";

import "./ItemList.css"

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

            products.map(product=> <Item key={product.id} product={product} /> )

        :

            products
            .filter(prod => prod.name.toLowerCase().includes(filterState.toLowerCase()))
            .map(product=> <Item key={product.id} product={product} /> )
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
