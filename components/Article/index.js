import Image from 'next/image'
import {
  ArticleContainer,
  ArticleImage,
  ArticleContent,
  ArticleTitle,
  ArticleSubtitle,
  ArticleTags
} from './styles'

export default function Article({ post }) {

  const postLink = `https://${process.env.mediumUserName}.medium.com/${post.uniqueSlug}`
  const imageURL = "https://miro.medium.com/max/770/"
  const imageId = post.virtuals.previewImage.imageId
  const tags = post.virtuals.tags

  return (
    <ArticleContainer>
      <ArticleImage>
        <Image
          src={imageURL + imageId}
          alt={`Foto do usuário ${post.title} do github`}
          layout='fill'
        />
      </ArticleImage>
      <ArticleContent>
        <ArticleTitle>
          <a target="_blank" href={postLink} rel="noopener noreferrer">   {post.title}
          </a>
        </ArticleTitle>
        <ArticleSubtitle>
          {post.previewContent2.subtitle}
        </ArticleSubtitle>
        <ArticleTags>
          {tags && tags.map((tag) => (
            <li key={tag.name}>{tag.name}</li>
          ))}
        </ArticleTags>
      </ArticleContent>
    </ArticleContainer>
  )
}

