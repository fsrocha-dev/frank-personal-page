import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useKBar } from 'kbar'

export default function Header() {
  const router = useRouter()
  const pages = ['About', 'Articles', 'Videos', 'Uses']

  return (
    <header className="site-header">
      <nav className="site-navbar">
        <NextLink href="/" passHref>
          <button type="button" className="btn-nav btn-logo">
            <span>FR</span>
          </button>
        </NextLink>
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
                <NextLink href={path} passHref>
                  <a>{page}</a>
                </NextLink>
              </li>
            )
          })}
        </ul>
        <button
          type="button"
          aria-label="Command Button"
          className="btn-nav btn-cmd"
          onClick={useKBar().query.toggle}
        >
          <i className="ri-command-line"></i>
        </button>
      </nav>
    </header>
  )
}
