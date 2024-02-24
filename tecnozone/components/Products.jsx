'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

function Products({ products }) {

  const router = useRouter();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}
        style={{cursor:'pointer'}}
        className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'
          onClick={() => {
            router.push(`/product/${product.id}`)
          }}
        >{product.name} ${product.price}</li>
      ))}
    </ul>
  )
}

export default Products