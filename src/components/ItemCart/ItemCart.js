import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({ id, name, quantity, price }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <article style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#efefef'}}>
            <h3>{name}</h3>
            <h4>cantidad {quantity}</h4>
            <h4>precio uni: ${price}</h4>
            <h4>subtotal: ${price * quantity}</h4>
            <button className="Option" style={{ backgroundColor: 'red' }} onClick={() => removeItem(id)}>Remove</button>
        </article>
    )
}

export default ItemCart