import Head from 'next/head'
import Main from '../layouts/Main'

export default function Home(props) {
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
    </div>
  )
}

Home.Layout = Main

export async function getStaticProps() {
  return {
    props: {
      title: 'Frank Rocha',
      description: 'Vamos aprender, e nos divertir com javascript!'
    }
  }
}
