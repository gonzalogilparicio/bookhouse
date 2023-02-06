import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const { cart } = useContext(CartContext)
 console.log(cart)
    return (
        <div>
            <h1>Cart</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <h2 key={prod.id}>{prod.title}</h2>
                        )
                    })
                }
            </div>

            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartContainer