import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({ totalQuantity }) => {
    return(
        <div className="CartWidget">
            <img src='/assets/img/cart.svg' alt='cart svg image' />
            { totalQuantity }
        </div>
    );
}

export default CartWidget