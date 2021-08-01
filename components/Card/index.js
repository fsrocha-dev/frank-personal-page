export default function Card({ title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" alt={description}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  )
}