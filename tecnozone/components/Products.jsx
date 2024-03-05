'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
        >
          <div className='container'>
            <div className='row align-items-start'>
              <div className='col'>
                <Image src={product.image} width={100} height={100}></Image>
              </div>
              <div className='col'>
                <h5>{product.title} </h5>
              </div>
              <div className='col'>
                <h4>${product.price}</h4>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Products