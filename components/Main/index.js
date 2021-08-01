import Article from "../Article/index.js"

export default function Main({ mediumPost }) {
  return (
    <main>
      <Article post={mediumPost[0]} />
    </main>
  )
}

