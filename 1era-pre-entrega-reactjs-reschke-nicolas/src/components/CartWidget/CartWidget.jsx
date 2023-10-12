import { BsFillCartCheckFill } from 'react-icons/bs'

export const CartWidget = () => {
    return (
        <div>
            <strong>0</strong>
            <a className='carrito' href="">
                <BsFillCartCheckFill />
            </a>
        </div>
    )
}
