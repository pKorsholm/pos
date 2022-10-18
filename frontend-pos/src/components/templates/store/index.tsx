import React from "react"
import { FlatList, Text, TextInput, View } from "react-native"
import { useProducts } from "medusa-react"
import ProductItem from "../../productItem"

const Search = () => {
  const [search, setSearch] = React.useState("")
  const { products, offset, limit, isLoading } = useProducts({ q: search })
  console.log(products?.length)
  console.log(offset)
  console.log(limit)
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ width: "100%", backgroundColor: "#fff", padding: 5 }}>
        <TextInput
          style={{
            borderRadius: 10,
            backgroundColor: "#fff",
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
          value={search}
          onChangeText={setSearch}
        ></TextInput>
      </View>
      {!isLoading && (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      )}
    </View>
  )
}

export default Search
