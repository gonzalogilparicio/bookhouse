import './ItemDetail.css'
import { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../notification/NotificationService'


const ItemDetail = ({ id, title, author, img, pages, ISBN, review, publishinghouse, price, stock }) => {
    const { addItem, isInCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)
        
        addItem({ id, title, price, quantity})
        setNotification('error',`Se agrego al carrito ${quantity} ${title}`, 5)
    }

    return (
        <div className='ItemDetail'>
            <header className="Header">
                <picture>
                    <img src={img} alt={title} className="ItemDetailImg" />
                </picture>
            </header>
            <div className='ItemDetailInfo'>
                <section>
                    <h2 className="ItemDetailTitle">
                        {title}
                    </h2>
                </section>
                <section>
                    <h3 className="ItemDetailAuthor">
                        Autor/a: {author}
                    </h3>
                </section>
                <section>
                    <p className="ItemDetailPrice">
                        Precio: ${price}
                    </p>
                </section>
                <div className='ItemDetailCounter'>
                <footer className='ItemFooter'>
                {
                    isInCart(id) ? (
                        <Link to='/cart'><button className='ButtonTerminarCompra'>Terminar compra</button></Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
                </div>
                <h4 className='ItemDetailPublishingHouse'>
                    <span>Editorial:</span>{publishinghouse}
                </h4>
                <h4 className='ItemDetailISBN'>
                    <span>ISBN:</span>{ISBN}
                </h4>
                <h4 className='ItemDetailPages'>
                    <span>Páginas:</span>{pages}
                </h4>
                <h4 className='ItemDetailReview'>
                    <span>Reseña:</span>{review}
                </h4>
            </div>
        </div>
    )
}

export default ItemDetail