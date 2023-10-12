function ItemListContainer({saludo = "saludo por defecto"}) {
    return (
        <>
            <div>
                <p>{saludo}</p>
            </div>
            <div>
                <img className="imgPastas" src="/assets/foto1.jpeg" />
                <img className="imgPastas" src="/assets/foto2.jpeg" />
                <img className="imgPastas" src="/assets/foto3.jpeg" />
            </div>
        </>
    )
}

export default ItemListContainer