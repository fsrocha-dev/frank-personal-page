import Head from 'next/head'
import Main from '../layouts/Main'
import Section from '../components/Section'
import Icon from '../components/ui/Icon'
import projects from '../data/projects'

function Projects(props) {
  const { title, description } = props

  return (
    <div className="container cyan">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://frankrocha.dev/uses/" property="og:url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<h2 className="green-gradient-text">My latest projects.</h2>
			<p>In that section you should find both personal and open source projects! Plus some fun stuff.</p>
      <Section delay={0.1}>
				{projects.map((project, index) =>
          renderProjectItem({ project, index })
        )}
      </Section>

		</div>
	)
}

const renderProjectItem = props => {
  const { project, index } = props

  return (
		<a
		href={"https://github.com/fsrocha-dev/slidefy"}
		target="_blank"
		rel="noopener noreferrer"
		className="project-item"
		key={index}
		>
		<div className="project-content ">
			<Icon name={project.iconName} size={30}/>
			<h3>{project.name}</h3>
			<span>{project.description}</span>
		</div>
		</a>
  )
}

export async function getStaticProps() {
  const meta = {
    title: 'Projects // Frank Rocha',
    description: 'My loved projects'
  }

  return { props: meta }
}

Projects.Layout = Main

export default Projects
