import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"

const CartContainer = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <h4 style={{ color: "black", marginTop: "40px", fontSize: '40px' }}>Finalizá tu compra</h4>
            <CartList cart={cart} />
        </div>
    )
}

export default CartContainer