import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemList from '../ItemList/ItemList';

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
        return (
            <div>
                <h2 className='h2loading'>Cargando</h2>
                <div className='lds-dual-ring'></div>
            </div>
        );
    }

    if(error) {

        const rejectApi = () => {
            toast.error('Hubo un problema al conectarse con la base de datos', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        return (            
            <div>            
                <ToastContainer />
            </div>
        );
    }
  
    return (
        <div>
            <h1 style={{color}}>{greeting}</h1>
            <ItemList products={products} />            
        </div>
    )
    
}



export default ItemListContainer