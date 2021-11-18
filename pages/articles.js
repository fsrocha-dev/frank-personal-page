import Head from 'next/head'
import Image from 'next/image'
import Main from '../layouts/Main'
import articles from '../data/articles'

function Articles(props) {
  const { title, description } = props
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://frankrocha.dev" property="og:url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className="last-talks-heading">Last Articles</h2>
      <div className="last-talks">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="last-talk-item"
          >
            <div className="last-talk-image">
              <Image
                loading="lazy"
                layout={'fill'}
                src={article.imagePath}
                alt={article.title}
              />
            </div>
            <div className="last-talk-content">
              <h3>{article.title}</h3>
              <span>{article.readingTime} MIN READ</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const meta = {
    title: 'Articles // Frank Rocha',
    description: 'My latest articles written for the web'
  }

  return { props: meta }
}

Articles.Layout = Main

export default Articles
