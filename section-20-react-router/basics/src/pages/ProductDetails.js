import { useParams } from "react-router-dom"

const ProductDetails = () => {
  const urlParams = useParams()
  console.log(urlParams.productId)

  return (
    <section>
      <h1>Product Detail</h1>
      <h2>{urlParams.productId}</h2>
    </section>
  )
}

export default ProductDetails