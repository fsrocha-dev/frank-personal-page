import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Main({ children }) {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
