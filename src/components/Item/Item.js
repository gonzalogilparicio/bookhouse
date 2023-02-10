import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, title, author, img }) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <picture>
                    <Link to={`/detail/${id}`} className='Option'>
                        <img src={img} alt={title} className="ItemImg" />
                    </Link>
                </picture>
            </header>
        </article>
    )
}

export default Item