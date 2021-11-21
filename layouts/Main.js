import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

export default function Main({ children }) {
  const { key: route } = children

  return (
    <div className="wrapper">
      <Header />
      <motion.main
        key={route}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.4, type: 'easeInOut' }}
        className="site-content"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
