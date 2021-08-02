import { CardLink } from './styles'
export default function Card({ title, description, link }) {
  return (
    <CardLink href={link} target="_blank" rel="noreferrer" alt={description}>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardLink>
  )
}