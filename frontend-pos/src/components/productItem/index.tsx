import { Product } from "@medusajs/medusa"
import React from "react"
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native"
import {
  View,
  Image,
  Text,
  Modal,
  TouchableHighlight,
  SafeAreaView,
} from "react-native"
import ProductDetail from "./detail"

type ProductItemType = {
  product: Product
}
const ProductItem: React.FC<ProductItemType> = ({ product }) => {
  const [modalVisible, setModalVisible] = React.useState(false)

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => setModalVisible(true)}
    >
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderColor: "#f7f7f7",
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <Image
          style={{
            width: 30,
            height: 40,
            borderRadius: 5,
            marginHorizontal: 10,
          }}
          source={{ uri: product.thumbnail }}
        />
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <Text>{product.title}</Text>
          <Text>{product.handle}</Text>
        </View>
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
          presentationStyle="overFullScreen"
          style={{ width: "50%", height: "50%" }}
        >
          <SafeAreaView>
            <TouchableOpacity
              style={{
                // flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
                width: "100%",
                height: "100%",
                // flexDirection: "column",
              }}
              activeOpacity={1}
              onPressOut={() => {
                setModalVisible(false)
              }}
            >
              <ScrollView
                directionalLockEnabled={true}
                contentContainerStyle={{
                  alignSelf: "center",
                  borderRadius: 10,
                  padding: 10,
                  width: "80%",
                  height: "80%",
                  backgroundColor: "#fff",
                }}
              >
                <TouchableWithoutFeedback>
                  <View style={{ width: "100%", height: "100%" }}>
                    <ProductDetail product={product} />
                  </View>
                </TouchableWithoutFeedback>
              </ScrollView>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      </View>
    </TouchableHighlight>
  )
}

export default ProductItem
