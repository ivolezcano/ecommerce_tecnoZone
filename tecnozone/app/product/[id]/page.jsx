import Link from "next/link"
import Image from "next/image"

async function getData (id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()
  return data
}

async function shopPage({ params }) {

  const indProduct = await getData(params.id)

  return (
    <div className="row">
      <div>
        <Link href={'/shop'} className="back-link">🡠 Back to Shop</Link>
      </div>
      <div className="col-md-6">
        <Image 
        className='img-thumbnail' 
        src={indProduct.image} 
        width={700} 
        height={600}/>
      </div>
      <br />
      <div className="col-md-6">
        <h1>{indProduct.title}</h1>
        <h2>${indProduct.price}</h2>
        <br />
        <h4>{indProduct.description}</h4>
      </div>
    </div>
  )
}

export default shopPage