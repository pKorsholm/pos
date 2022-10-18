import { Product } from "@medusajs/medusa"
import React from "react"
import { View, Image, ScrollView, Text } from "react-native"

type ProductDetailType = {
  product: Product
}
const ProductDetail: React.FC<ProductDetailType> = ({ product }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal={true} style={{ width: "100%", height: 100 }}>
          {product.images.map((image) => (
            <Image
              // style={{ height: 80, width: 70 }}
              source={{ uri: image.url }}
              key={image.id}
            />
          ))}
        </ScrollView>
      </View>
      <Text>{product.title}</Text>
      <Text>{product.handle}</Text>
    </View>
  )
}

export default ProductDetail
