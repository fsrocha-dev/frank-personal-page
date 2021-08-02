import { useContext } from 'react'
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare
} from 'react-icons/fa'
import { FooterContainer, FooterNav } from './styles';
import { ThemeContext } from 'styled-components';

export default function Footer() {
  const { colors } = useContext(ThemeContext)

  const linkedinURL = `https://www.linkedin.com/in/${process.env.userName.linkedin}/`
  const twitterURL = `https://twitter.com/${process.env.userName.twitter}`
  const githubURL = `https://github.com/${process.env.userName.github}`

  return (
    <FooterContainer>
      <FooterNav>
        <a target="_blank" href={githubURL} rel="noopener noreferrer">
          <FaGithubSquare color={colors.primary} />
        </a>
        <a target="_blank" href={linkedinURL} rel="noopener noreferrer">
          <FaLinkedin color={colors.primary} />
        </a>
        <a target="_blank" href={twitterURL} rel="noopener noreferrer">
          <FaTwitterSquare color={colors.primary} />
        </a>
      </FooterNav>
      <p>
        <span>
          Feito com 💖 e NextJs por
        </span>
        <a target="_blank" href={githubURL} rel="noopener noreferrer"> min</a>
      </p>
    </FooterContainer>
  )
}