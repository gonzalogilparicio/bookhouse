import './ItemListContainer.css'

const ItemListContainer = ({ greeting, color }) => {
    return (
        <div>
            <h1 style={{color}}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer