import '../public/static/css/main.css'
import 'remixicon/fonts/remixicon.css'

const Noop = ({ children }) => children

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || Noop

  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
