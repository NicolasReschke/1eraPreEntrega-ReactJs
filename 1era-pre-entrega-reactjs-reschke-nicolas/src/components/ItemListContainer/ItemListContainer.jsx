function ItemListContainer({saludo = "saludo por defecto"}) {
    return (
        <>
            <div>
                <p>{saludo}</p>
            </div>
            <div>
                <a href=""><img className="imgPastas" src="/assets/foto1.jpeg" /></a>
                <a href=""><img className="imgPastas" src="/assets/foto2.jpeg" /></a>
                <a href=""><img className="imgPastas" src="/assets/foto3.jpeg" /></a>
            </div>
        </>
    )
}

export default ItemListContainer