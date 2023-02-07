import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"

const CartContainer = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <h4 style={{ color: "#9da5d2", marginTop: "20px" }}>Finaliza tu compra</h4>
            <CartList cart={cart} />
        </div>
    )
}

export default CartContainer