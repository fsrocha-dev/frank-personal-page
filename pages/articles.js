import Head from 'next/head'
import ImageItem from '../components/ImageItem'
import Main from '../layouts/Main'
import articles from '../data/articles'
import Section from '../components/Section'

function Articles(props) {
  const { title, description } = props
  return (
    <div className="container cyan">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://frankrocha.dev/articles/" property="og:url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className="last-talks-heading">Last Articles</h2>
      <Section delay={0.1} className="last-talks">
        {articles.map((article, index) =>
          renderArticleItem({ article, index })
        )}
      </Section>
    </div>
  )
}

const renderArticleItem = props => {
  const { article, index } = props

  return (
    <a
      key={index}
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="last-talk-item"
    >
      <div className="last-talk-image">
        <ImageItem
          quality={75}
          name={article.imageName}
          path="images"
          alt={article.title}
        />
      </div>
      <div className="last-talk-content">
        <h3>{article.title}</h3>
        <span>{article.readingTime} MIN READ</span>
      </div>
    </a>
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
