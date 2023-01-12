import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory} from "../../asyncMock"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting, color }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const { categoryId } = useParams();    
    
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

    
    
    useEffect (() => {
        setLoading(true);
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
        asyncFunction(categoryId).then(productsFromApi => {
            setProducts(productsFromApi)
        }).catch(error => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

   
   if(loading) {
        return (
            <div>
                <h2 className='h2loading'>Cargando</h2>
                <div className='lds-dual-ring'></div>
            </div>
        );
    }

    if(error) {            
        
        rejectApi()
        return (            
            <div>            
                <ToastContainer />
            </div>
        );
    }
  
    return (
        <div className='ItemListContainer'>
            <h1 style={{color}}>{greeting}</h1>
            <div className='CategoryButtons'>
                <Link to={`/category/narrativa`} className='CategoryButton'>Narrativa</Link>
                <Link to={`/category/autoayuda`} className='CategoryButton'>Autoayuda</Link>
                <Link to={`/category/historia`} className='CategoryButton'>Historia</Link>
                <Link to={`/category/infantiles`} className='CategoryButton'>Infantiles</Link>
                <Link to={`/category/psicología`} className='CategoryButton'>Psicología</Link>
            </div>
            <ItemList products={products} />            
        </div>
    )
    
}



export default ItemListContainer