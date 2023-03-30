import React from 'react'
import './CartWidgets.css'

const CartWidgets = () => {
    const imgCarrito = "https://img.freepik.com/vector-premium/icono-carrito-compras-rapido_414847-513.jpg?w=2000"
  return (
    <div>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
      <strong>3</strong>
    </div>
  )
}

export default CartWidgets
