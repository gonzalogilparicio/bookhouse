import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'

const ItemListContainer = ({ greeting, color }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        setLoading(true);
        getProducts().then(productsFromApi => {
            setProducts(productsFromApi)
        }).catch(error => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    console.log(products);

    if(loading) {
        return <h1>Cargando...</h1>;
    }

    if(error) {
        return <h1>Hubo un error al conectarse con la base de datos.</h1>;
    }
  
    return (
        <div>
            <h1 style={{color}}>{greeting}</h1>
            <ul>
                {products.map(prod => <li>{prod.title}</li>)}
            </ul>
        </div>
    )
}

export default ItemListContainer