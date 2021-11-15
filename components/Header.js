import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const pages = ['About', 'Articles']

  return (
    <header className="site-header">
      <nav className="site-navbar">
        <Link href="/" passHref>
          <button type="button" className="btn-nav btn-logo">
            <span>FR</span>
          </button>
        </Link>
        <ul>
          {pages.map(page => {
            const path = `/${page.toLowerCase()}`
            return (
              <li
                key={page}
                className={
                  router.pathname == path ? 'site-navbar-link__active' : ''
                }
              >
                <Link href={path}>
                  <a>{page}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <button type="button" aria-label="Command" className="btn-nav btn-cmd">
          <i className="ri-command-line"></i>
        </button>
      </nav>
    </header>
  )
}
