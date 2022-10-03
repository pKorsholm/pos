import Layout from "../components/layout"
import Providers from "../components/providers"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default MyApp
