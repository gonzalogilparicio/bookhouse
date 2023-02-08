import { addDoc, getDocs, writeBatch, query, collection, where, documentId } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate, Link } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import { NotificationContext } from "../../notification/NotificationService"
import './Checkout.css'

const Checkout = () => {
    const setNotification = useContext(NotificationContext)

    const { cart, total, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)
            console.log(ids)

            const prodRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const prodAdded = await getDocs(prodRef)
            const { docs } = prodAdded

            const outOfStock = []

            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodCant = productAddedToCart.quantity

                if (stockDb >= prodCant) {
                    batch.update(doc.ref, {
                        stock: stockDb - prodCant
                    })
                } else {
                    outOfStock.push({ id: doc.id, ...data })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()
                console.log(objOrder)
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                const { id } = orderAdded
                setOrderId(id)
                clearCart()

                // setTimeout(() => {
                //     navigate('/')
                // }, 5000)

                console.log(id)
            } else {
                console.error('productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h4 className="H4" style={{ marginTop: '50px', fontSize: '40px' }}>Generando orden...</h4>
    }

    if (orderId) {
        return (
            <div className="container">
                <h4 style={{ color: "black", marginTop: "60px", marginBottom: "60px" }}>{name}, tu compra fue realizada con éxito!</h4>
                <div className="card item-detail-card" style={{ color: "#9da5d2" }}>
                    <div className="card-body item-detail-body">
                        <h5 className="card-title" style={{ color: "black" }}>Tu número de compra es: {orderId}</h5>
                    </div>
                </div>
                <div>
                    <h5 style={{ color: 'black', marginTop: '40px' }}>En breve recibirás un e-mail con los pasos a seguir</h5>
                    <Link to='/'><p style={{ fontSize:'20px' ,marginTop: '90px', color: 'black', textDecoration: 'none' }} >Volver al inicio</p></Link>
                </div>
            </div>

        )
    }

    if (cart.length === 0) {
        return (
            <div>
                <h4 className="H4" style={{ marginTop: '80px', fontSize: '30px' }}>No hay productos en el carrito</h4>
                <Link to='/'><p style={{ marginTop: '40px', color: 'black', textDecoration: 'none' }} >Volver al inicio</p></Link>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || phone === '') {
            setNotification('error', `Todos los campos deben estar completos para poder finalizar su compra`, 5);
        } else {
            createOrder();
        }
    };

    return (
        <div>
            <h4 className="title-pag" style={{ color: "black", marginTop: "50px", marginBottom: "70px", fontSize: '35px' }}>Completá tus datos y confirmá la compra</h4>
            <div className="container">
                <form className="FormularioOrden">
                    <div className="form-group">
                        <input type="text" className="form-control" value={name} placeholder="Nombre y Apellido" onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="number" className="form-control " value={phone} placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="email" className="form-control" value={email} placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <br />
                    <button onClick={handleSubmit} type="submit" className="ButtonGenerarOrden">Generar orden</button>
                </form>
            </div>


        </div>
    )
}

export default Checkout