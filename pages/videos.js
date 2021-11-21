import Head from 'next/head'
import Image from 'next/image'
import Main from '../layouts/Main'
import videos from '../data/videos'
import Section from '../components/Section'

function Videos(props) {
  const { title, description } = props

  return (
    <div className="container green">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://frankrocha.dev/videos/" property="og:url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-thought-box">Yes I like to teach what I know</div>

      <h2 className="last-videos-heading">Featured Videos</h2>
      <div className="last-videos-container">
        {videos.map((video, index) => renderVideoItem({ video, index }))}
      </div>
    </div>
  )
}

const renderVideoItem = props => {
  const { video, index } = props

  return (
    <Section delay={`0.${index}`} key={index}>
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="video-item"
      >
        <div className="video-thumb">
          <Image
            layout="fill"
            loading="eager"
            quality="75"
            src={getYoutubeTumbnail(video.url)}
            alt={video.title}
          />
        </div>
        <div className="last-video-content">
          <h3>{video.title}</h3>
          <h4>{video.channel}</h4>
          <span>{video.views} VIEWS</span>
        </div>
      </a>
    </Section>
  )
}

const getYoutubeTumbnail = url => {
  const getIdFromURL = url.substr(-11)
  const urlYoutubeTambnail = `https://i.ytimg.com/vi/${getIdFromURL}/maxresdefault.jpg`
  return urlYoutubeTambnail
}

export async function getStaticProps() {
  const meta = {
    title: 'Videos // Frank Rocha',
    description: 'My latest videos for the web'
  }

  return { props: meta }
}

Videos.Layout = Main

export default Videos
