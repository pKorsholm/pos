import { Product } from "@medusajs/medusa"
import React, { useContext } from "react"
import StoreContext from "../../context/store-context"
import TagIcon from "../icons/tag"

const CartView = () => {
  const { cart } = useContext(StoreContext)

  return (
    <div className="h-screen flex flex-col pb-2xlarge gap-y-large">
      <div className="flex grid grid-cols-5 gap-x-base">
        <button className="bg-grey-70 text-grey-20 rounded-rounded col-span-3">
          Add discount
        </button>
        <button className="bg-grey-70 text-grey-20 flex justify-center items-center rounded-rounded aspect-square">
          <TagIcon />
        </button>
        <button className="bg-grey-70 text-grey-20 flex justify-center items-center rounded-rounded aspect-square">
          <TagIcon />
        </button>
      </div>
      <div className="flex flex-col gap-y-xsmall">
        {cart.items.map((product: Product, i: number) => (
          <div key={`cart-product-${i}`}>{product.title}</div>
        ))}
      </div>
      <div className="flex w-full flex-col grow justify-between bg-grey-70 rounded-rounded p-base">
        <div className="flex flex-col">
          <div className="flex justify-between text-grey-50">
            <span>Subtotal</span>
            <span>Subtotal</span>
          </div>
          <div className="flex justify-between text-grey-50">
            <span>Tax</span>
            <span>Tax</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-base">
          <span className="text-grey-50">payment</span>
          <div className="flex gap-x-base">
            <button className="bg-grey-50 flex grow p-small  text-grey-70 rounded-rounded">
              Cash
            </button>
            <button className="bg-grey-50 flex grow p-small text-grey-70 rounded-rounded">
              Card
            </button>
          </div>
          <div className="flex border-b border-grey-60"></div>
          <button className="bg-grey-0 text-grey-90 p-large rounded-rounded">
            Place order
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartView
