import React, {useState} from 'react'

const Basic2 = () => {

  const [products, setProducts] = useState([])
  const newProducts = () => {
    setProducts([...products, {
      id: products.length,
      name: "Hello",
    }])
  }

  return (
    <div>
      <button onClick={newProducts}>Add New Product</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.id} {product.name} {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default Basic2

