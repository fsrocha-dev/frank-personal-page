import Article from "../Article/index.js"
import Card from "../Card/index.js"

export default function Main({ mediumPost }) {
  return (
    <main>
      <Article post={mediumPost[0]} />
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
    </main>
  )
}

