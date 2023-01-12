const ItemList = ({products}) => {
    return (
        <ul>
            {products.map(prod => <li key={prod.id}>{prod.title}</li>)}                
        </ul>
    )
}

export default ItemList