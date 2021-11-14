import Head from 'next/head'
import mediumJSONFeed from 'medium-json-feed'
import { useState, useEffect } from 'react'
import GlobalStyle from '../styles/global'
import Light from '../styles/themes/light'
import Dark from '../styles/themes/dark'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import useThemeSwitcher from '../hook/useThemeSwitcher.js'


export default function Home(props) {
  const [theme, setTheme] = useThemeSwitcher(Dark)

  const changeTheme = () => {
    setTheme(theme.title === 'dark' ? Light : Dark)
  }

  return (
      <>
        <GlobalStyle />
        <Head>
          <title>Frank Rocha</title>
          <meta name="description" content="Venha aprender e se divertir com javascript!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header githubData={props.github} changeTheme={changeTheme} />
        <Main mediumPost={props.medium} />
        <Footer />
      </>
  )
}

export async function getStaticProps() {
  const githubData = await fetch(`https://api.github.com/users/${process.env.userName.github}`).then(res => res.json())

  const mediumPostsData = await mediumJSONFeed(`@${process.env.userName.medium}`)

  const URL = process.env.appEnv === 'local' ? process.env.urlDev : process.env.urlProd

  // const mediumPostsData = await fetch(`${URL}/api/medium`).then(res => res.json())

  return {
    props: {
      github: {
        avatar_url: githubData.avatar_url,
        name: githubData.name
      },
      medium: mediumPostsData.response
    }
  }
}