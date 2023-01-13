import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, title, author, img, category, review, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log(`Se agregó al carrito ${quantity} unidad/es del libro ${title}`)
        setQuantity(parseInt(quantity))
    }

    return (
        <article className="CardItem">
            <header className="Header">
            <picture>
            <Link to={`/detail/${id}`} className='Option'>
                <img src={img} alt={title} className="ItemImg"/>
                </Link>
            </picture>
                
            </header>
            <section>
            <h2 className="ItemTitle">
                    {title}
                </h2>
            </section>
            <section>
            <h3 className="ItemAuthor">
                    {author}
                </h3>
            </section>

            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>         
            
                   
            <footer className='ItemFooter'>
                {
                    quantity > 0 ? (
                        <Link to='/cart'>Finalizar compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail