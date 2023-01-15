import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(prev => prev + 1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(prev => prev - 1)
       }     
   }

   return(
       <div className='Counter'>          
            <div className='Controls'>
                <button className="Button ButtonDecInc" onClick={decrement}>-</button>
                <h4 className='NumberItemCount'>{quantity}</h4>
                <button className="Button ButtonDecInc" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button ButtonAgregar" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount