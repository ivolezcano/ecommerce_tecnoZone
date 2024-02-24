
async function getData (id) {
  const response = await fetch(`https://fake-store-api-409620.rj.r.appspot.com/api/products/${id}`)
  const content = await response.json()
  return content.content
}

async function shopPage({ params }) {

  const product = await getData(params.id)

  return (
    <div>
        <h1>Product Page</h1>
        <p>Name: {product.id}</p>
    </div>
  )
}

export default shopPage