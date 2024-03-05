import Products from "@/components/Products";
import React from 'react'


async function fetchProduct() {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data  = await response.json()
    return data
}

async function productPage() {
    const products = await  fetchProduct();
    return(
        <Products products = {products}/>
    )
}
export default productPage