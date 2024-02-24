
async function getData (id) {
  const response = await fetch(`https://fake-store-api-409620.rj.r.appspot.com/api/products/${id}`)
  const data = await response.json()
  return data
}

async function shopPage({ params }) {

  const indProduct = await getData(params.id)

  return (
    <div>
        <h1>Product Page</h1>
        <p>{indProduct.name}</p>
    </div>
  )
}

export default shopPage