import Products from "@/components/Products";
import React from 'react'

async function fetchProduct() {
    const response = await fetch(`https://fake-store-api-409620.rj.r.appspot.com/api/products/all`)
    const data  = await response.json()
    return data.content
}

async function productPage() {
    const products = await  fetchProduct();
    return(
        <Products products = {products}/>
    )
}
export default productPage