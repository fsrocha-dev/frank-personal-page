import Image from 'next/image'
export default function Article({ post }) {

  const postLink = `https://${process.env.mediumUserName}.medium.com/${post.uniqueSlug}`
  const imageURL = "https://miro.medium.com/max/770/"
  const imageId = post.virtuals.previewImage.imageId
  const tags = post.virtuals.tags

  return (
    <article>
      <Image
        src={imageURL + imageId}
        alt={`Foto do usuário ${post.title} do github`}
        width={600}
        height={250}
      />
      <a target="_blank" href={postLink} rel="noopener noreferrer">
        <h1>{post.title}</h1>
      </a>
      <p>{post.previewContent2.subtitle}</p>
      <ul>
        {tags && tags.map((tag) => (
          <li key={tag.name}>{tag.name}</li>
        ))}
      </ul>
    </article>
  )
}

