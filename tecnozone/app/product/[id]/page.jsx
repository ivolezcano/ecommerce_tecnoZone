import Link from "next/link"
import Image from "next/image"

async function getData (id) {
  const response = await fetch(`https://fake-store-api-409620.rj.r.appspot.com/api/products/${id}`)
  const data = await response.json()
  return data
}

async function shopPage({ params }) {

  const indProduct = await getData(params.id)

  return (
    <div>
      <div>
        <Link href={'/shop'} className="back-link">🡠 Back to Shop</Link>
      </div>
      <div>
        <h1>{indProduct.name}</h1>
        <Image 
        className='product-img' 
        src={indProduct.imageUrl} 
        width={700} 
        height={600}/>
      </div>
    </div>
  )
}

export default shopPage