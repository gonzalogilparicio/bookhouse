import ItemCart from "../ItemCart/ItemCart"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './CartList.css'

const CartList = ({cart}) => {

    const { total, clearCart } = useContext(CartContext)

    return (
        <section className="h-100 gradient-custom">
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3" style={{color: "#f8b629"}}>
                                <h5 className="mb-0">Carrito</h5>
                            </div>
                            <div className="card-body">
                                {
                                    cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
                                }
                            </div> 
                            
                            <button type="button" className="btn btn-sm btn-del" title="Vaciar carrito" onClick={() => clearCart()}>
                                Limpiar carrito
                            </button> 
                             
                                                    
                        </div>
                </div>
                <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-header py-3" style={{color: "#f8b629"}}>
                                <h5 className="mb-0">Total</h5>
                            </div>
                            <div className="card-body" style={{color: "#9da5d2"}}>
                                ${total}
                            </div>
                            <Link to='/checkout' className="btn btn-sm btn-count">Realizar compra</Link>
                        </div>
                        
                </div>
                
                </div>
            </div>
        </section>
               
    )
}

export default CartList