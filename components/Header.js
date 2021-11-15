import Link from 'next/link'
export default function Header() {
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
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a>Articles</a>
            </Link>
          </li>
        </ul>
        <button type="button" aria-label="Command" className="btn-nav btn-cmd">
          <i className="ri-command-line"></i>
        </button>
      </nav>
    </header>
  )
}
