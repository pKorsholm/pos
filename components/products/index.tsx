import { Product } from "@medusajs/medusa"
import { useProducts } from "medusa-react"
import React from "react"

type ProductTileType = {
  product: Product
}
const ProductTile: React.FC<ProductTileType> = ({ product }) => {
  return (
    <div className="shadow-sm rounded bg-grey-0 m-1">
      <div>{product.title}</div>
      <div>{product.description}</div>
    </div>
  )
}

const Products = () => {
  const { products } = useProducts()

  return (
    <div className="w-full grid grid-cols-4 ">
      {products?.map((product) => (
        <ProductTile product={product} />
      ))}
    </div>
  )
}

export default Products
