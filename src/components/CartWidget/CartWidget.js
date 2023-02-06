import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({ totalQuantity }) => {
    return (
        <Link to='/cart' className="CartWidget">
            <img src='/assets/img/cart.svg' alt='cart svg image' />
            {totalQuantity}
        </Link>
    );
}

export default CartWidget