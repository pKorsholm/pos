import { StoreProvider } from "../../context/store-context"
import { MedusaProvider } from "medusa-react"
import { QueryClient } from "react-query"

let medusaUrl = "http://localhost:9000"

// takes precedence over GATSBY_STORE_URL
if (process.env.GATSBY_MEDUSA_BACKEND_URL) {
  medusaUrl = process.env.GATSBY_MEDUSA_BACKEND_URL
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 90000,
      retry: 1,
    },
  },
})

const Providers = ({ children }) => {
  return (
    <MedusaProvider
      baseUrl={medusaUrl}
      queryClientProviderProps={{
        client: queryClient,
      }}
    >
      <StoreProvider>{children}</StoreProvider>
    </MedusaProvider>
  )
}

export default Providers
