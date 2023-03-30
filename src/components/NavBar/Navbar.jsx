import React from 'react'
import './Navbar.css'
import CartWidgets from '../CartWidgets/CartWidgets'

const Navbar = () => {
    return(
        <header>
            <h1>Petshop online</h1>
            <nav>
               <button>Productos</button>
               <button>Servicios</button>
               <button>Promociones</button>

            </nav>
            <CartWidgets/>
        </header>
    )
}

export default Navbar
