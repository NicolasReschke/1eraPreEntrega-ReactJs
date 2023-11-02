import { useCounter } from "../Hooks/useCounter"

export const ItemCounter = ({initial=1, stock= 15, onAdd}) => {
    const {count, handleResta, handleSuma} = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(count)
    }
    
    return (
        <div className="text-center">
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button onClick={handleResta}>-</button>
                <button onClick={handleSuma}>+</button>
                <button onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}
