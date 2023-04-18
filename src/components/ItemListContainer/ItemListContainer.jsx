import React, { useEffect, useState } from 'react' 4.2k (gzipped: 1.8k)
import './ItemListContainer.css';
const ItemListContainer = (props) => {
  return(
    <h2 className='subtitulo'>{props.greeting}</h2>
  )
};
const ItemListContainer =({greeting}) => {
  conts[products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response)
    })
  }, [])
  return (
    <div>
      <h1>{greeting}</h1>
      <itemList products={products}/>
    </div>
  )
}

export default ItemListContainer
