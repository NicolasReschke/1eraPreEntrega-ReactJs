import { useCounter } from "../Hooks/useCounter"
import './ItemCounter.css'

export const ItemCounter = ({initial=1, stock= 15, onAdd}) => {
    const {count, handleResta, handleSuma} = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(count)
    }
    
    return (
        <div className="justify-content-center botonesGrilla">
            <div className="d-flex justify-content-center">
                <button className="botones" onClick={handleResta}>-</button>
                <p className="botones">{count}</p>
                <button className="botones" onClick={handleSuma}>+</button>
            </div>
                <button className="botones" onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    )
}
