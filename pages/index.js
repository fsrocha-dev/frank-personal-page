import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frank Rocha</title>
        <meta name="description" content="Venha aprender e se divertir com javascript!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header githubData={props.github} />
      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const githubData = await fetch('https://api.github.com/users/fsrocha-dev').then(res => res.json())

  const URL = process.env.appEnv === 'local' ? process.env.urlDev : process.env.urlProd

  const mediumPostsData = await fetch(`${URL}/api/medium`).then(res => res.json())

  return {
    props: {
      github: {
        avatar_url: githubData.avatar_url,
        name: githubData.name
      },
      medium: mediumPostsData[0]
    }
  }
}
