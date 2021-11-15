import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Main({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
