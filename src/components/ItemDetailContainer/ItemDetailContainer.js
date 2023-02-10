import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'
import { Link } from "react-router-dom"

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const getProduct = () => getProductsById(productId)
    const { data: product, loading, error } = useAsync(getProduct, [productId])

    if (error) {
        return (
            <div>
                <h4 className="H4">Algo falló al cargar el producto, volvé a intentarlo</h4>
                <Link to='/'><p style={{ marginTop: '40px', color: 'black', textDecoration: 'none' }} >Volver al inicio</p></Link>
            </div>
        );
    }

    if (loading) {
        return (
            <div>
                <h2 className='h2loading'>Cargando</h2>
                <div className='lds-dual-ring'></div>
            </div>
        );
    }

    if (product == null) {
        return (
            <div>
                <h4 className="ProductoNoExiste">El producto no existe</h4>
                <Link to='/'><p style={{ marginTop: '40px', color: 'black', textDecoration: 'none' }} >Volver al inicio</p></Link>
            </div>
        );
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer