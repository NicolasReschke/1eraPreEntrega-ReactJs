
import { BsFillCartCheckFill } from 'react-icons/bs'
import { useCartContext } from '../../contexts/CartContext'

export const CartWidget = () => {

    const {sumQuantities} = useCartContext()
    return (
        <div>
            <a className='cart' href="">
                <strong className='strong1'> {sumQuantities()}</strong>
                <BsFillCartCheckFill />
            </a>
        </div>
    )
}
