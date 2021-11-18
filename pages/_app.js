import '../public/static/css/main.css'
import 'remixicon/fonts/remixicon.css'
import { AnimatePresence } from 'framer-motion'

const Noop = ({ children }) => children

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || Noop

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={true} key={router.route}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
