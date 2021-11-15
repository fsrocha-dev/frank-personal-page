import Link from 'next/link'
export default function Header() {
  const pages = ['About', 'Articles']

  return (
    <header className="site-header">
      <nav className="site-navbar">
        <Link href="/">
          <a className="">FR</a>
        </Link>
        <div className="">
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
        </div>
        <button type="button" aria-label="Command" className=""></button>
      </nav>
    </header>
  )
}
