import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

export default function Footer() {
  const linkedinURL = `https://www.linkedin.com/in/${process.env.userName.linkedin}/`
  const twitterURL = `https://twitter.com/${process.env.userName.twitter}`
  const githubURL = `https://github.com/${process.env.userName.github}`

  return (
    <footer>
      <nav>
        <a target="_blank" href={githubURL} rel="noopener noreferrer">
          <FaGithubSquare />
        </a>
        <a target="_blank" href={linkedinURL} rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a target="_blank" href={twitterURL} rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
      </nav>
      <p>Orgulhosamente desenvolvido por Frank Rocha 💚</p>
    </footer>
  )
}