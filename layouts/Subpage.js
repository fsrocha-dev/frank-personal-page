import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Subpage({ children }) {
  return (
    <div className="container">
      <Header />
        {children}
      <Footer />
    </div>
  )
}