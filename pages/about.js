import Head from 'next/head'
import Main from '../layouts/Main'
import ImageItem from '../components/ImageItem'
import Section from '../components/Section'

function About(props) {
  const { title, description } = props

  return (
    <div className="container green">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://frankrocha.dev/articles/" property="og:url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className="about-heading">I am a Digital Craftsman</h2>
      <div className="about-container">
        <div className="about-photo">
          <ImageItem
            quality={75}
            name="iam-best-qa.jpeg"
            path="photos"
            alt="About Frank`s photo"
          />
        </div>
        <div className="about-description">
          <p>
            Frank is a full-stack developer with a passion for building things
            digital. He has a knack for planning and solving real-life problems
            with code.
          </p>
          <p>
            I work professionally since 2011 (I used Eclipse for PHP). When not
            online, he loves hanging out with his family. He is currently
            working at a company called Betrybe, helping people break into the
            world of web development.
          </p>
        </div>
      </div>
      <Section delay={0.1}>
        <div className="about-career">
          <h2>Career</h2>
          <ul>
            <li>
              <span>Nov 2020 to present</span>
              Working as a Sr Javascript and Educator at Betrybe.com
            </li>
            <li>
              <span> Jan 2020 - Nov 2020</span>
              He worked as a fullstack developer at Bukly.com, leading the
              construction of a project
            </li>
            <li>
              <span>Jun 2017 - Jan 2020</span>
              Worked as a fullstack developer at Youtaf.com
            </li>
            <li>
              <span>Dec 2015 - Apr 2017</span>
              Served as Freelancer Fullstack for Askcs.com.br
            </li>
            <li>
              <span>Oct 2013 - Aug 2015</span>
              Worked as a fullstack developer at Mdy Software
            </li>
            <li>
              <span>Mar 2011 - Jun 2013</span>
              He started his career working as a freelancer php
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}

export async function getStaticProps() {
  const meta = {
    title: 'About // Frank Rocha',
    description: 'My latest articles written for the web'
  }

  return { props: meta }
}

About.Layout = Main

export default About
