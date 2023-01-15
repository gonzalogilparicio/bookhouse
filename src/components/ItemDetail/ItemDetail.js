import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, title, author, img, pages, ISBN, review, publishinghouse, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log(`Se agregó al carrito ${quantity} unidad/es del libro ${title}`)
        setQuantity(parseInt(quantity))
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
                    {
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    }
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