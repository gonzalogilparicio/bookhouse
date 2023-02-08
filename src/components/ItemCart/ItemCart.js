import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './ItemCart.css'

const ItemCart = ({ id, title, quantity, price, img }) => {

    const { removeItemCart } = useContext(CartContext)

    return (

        <div className="row align-items-center" style={{ color: "black" }}>

            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0 CartImgAndTitle">

                <img src={img} alt={title} />

                <p><strong>{title}</strong></p>
            </div>

            <div className="col-lg-5 DivCantidadPrecioSubtotal">
                <p><strong><span style={{ color: "black" }}>Cantidad: </span></strong><span style={{ color: "black" }}>{quantity}</span> </p>
                <p><strong><span style={{ color: "black" }}>Precio: </span></strong><span style={{ color: "black" }}>${price}</span> </p>
                <p><strong><span style={{ color: "black", marginRight: '24px' }}>Subtotal: </span></strong><span style={{ color: "black" }}>${price * quantity}</span> </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <button type="button" className="ButtonTrash"
                    title="Eliminar" onClick={() => removeItemCart(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-trash icn-del" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>
            </div>
            <hr className="my-4" />
        </div>
    )
}

export default ItemCart