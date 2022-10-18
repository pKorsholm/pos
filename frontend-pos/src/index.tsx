import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { MedusaProvider } from "medusa-react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import MyTabs from "./components/bottom-nav"
import { MEDUSA_BACKEND_URL, queryClient } from "./components/utils/config"

export default function App() {
  return (
    <MedusaProvider
      baseUrl={MEDUSA_BACKEND_URL}
      queryClientProviderProps={{
        client: queryClient,
      }}
      apiKey="test_token"
    >
      <SafeAreaView style={{ width: "100%", height: "100%" }}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </SafeAreaView>
    </MedusaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
