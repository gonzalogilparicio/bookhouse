import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const { cart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h4 className="H4" style={{ marginTop: '80px', fontSize: '30px' }}>No hay productos en el carrito</h4>
                <Link to='/'><p style={{ marginTop: '40px', color: 'black', textDecoration: 'none' }} >Volver al inicio</p></Link>
            </div>
        )
    }

    return (
        <div>
            <h4 style={{ color: "black", marginTop: "40px", fontSize: '40px' }}>Finalizá tu compra</h4>
            <CartList cart={cart} />
        </div>
    )
}

export default CartContainer