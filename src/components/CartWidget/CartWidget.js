import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({ totalQuantity }) => {
    return (
        <Link to='/cart' className="CartWidgetNumber">
            <img src='/assets/img/cart.svg' alt='cart svg' />
            {totalQuantity}
        </Link>
    );
}

export default CartWidget