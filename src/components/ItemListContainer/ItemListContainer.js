import './ItemListContainer.css'
import { useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import { useEffect } from 'react'

const ItemListContainer = ({ greeting, color }) => {

    useEffect

    return (
        <div>
            <h1 style={{color}}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer