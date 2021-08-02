import Article from '../Article/index.js'
import Card from '../Card/index.js'
import { Title, MainContainer } from './styles'

export default function Main({ mediumPost }) {
  console.log(mediumPost)
  return (
    <MainContainer>
      <Title>Recent Posts 🔥</Title>
      <Article post={mediumPost[0]} />
      <Title>My links 🔗</Title>
      <div>
        <Card
          title="Artigos"
          description="Veja todos os artigos que publiquei no Medium."
          link="https://frankrochajs.medium.com"
        />
        <Card
          title="Youtube"
          description="Videos shorts sobre js, ts e outras coisas mais."
          link="https://www.youtube.com/channel/UCYRMu-9XhWGrahrFvjTtIjA"
        />
      </div>
    </MainContainer>
  )
}

