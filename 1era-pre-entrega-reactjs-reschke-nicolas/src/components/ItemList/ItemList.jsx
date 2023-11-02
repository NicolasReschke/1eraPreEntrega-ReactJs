export const ItemList = ({products}) => {
    return (
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
        )
    )
}