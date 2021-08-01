import Head from 'next/head'
import Footer from '../components/Footer/index.js'
import Header from '../components/Header'
import Main from '../components/Main'


export default function Home(props) {
  return (
    <div className="">
      <Head>
        <title>Frank Rocha</title>
        <meta name="description" content="Venha aprender e se divertir com javascript!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header githubData={props.github} />
      <Main mediumPost={props.medium} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const githubData = await fetch(`https://api.github.com/users/${process.env.userName.github}`).then(res => res.json())

  const URL = process.env.appEnv === 'local' ? process.env.urlDev : process.env.urlProd

  const mediumPostsData = await fetch(`${URL}/api/medium`).then(res => res.json())

  return {
    props: {
      github: {
        avatar_url: githubData.avatar_url,
        name: githubData.name
      },
      medium: mediumPostsData
    }
  }
}
