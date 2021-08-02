import styled from 'styled-components'

export const ArticleContainer = styled.article`
  /* width: 80vw; */
  height: 250px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background: ${props => props.theme.colors.backgroundTransparent};
  transition: 200ms;
  &:hover {
    background: ${props => props.theme.colors.backgroundMediumTransparent};
  }
  @media(max-width: 800px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`

export const ArticleImage = styled.div`
  overflow: hidden;
  width: 408px;
  border-radius: 5px;
  position: relative;
  @media(max-width: 800px) {
    display: none;
  }
`

export const ArticleContent = styled.div`
  padding: 0px 25px;
  width: 50vw;
  max-width: 50vw;
  @media(max-width: 800px) {
    min-width: 80vw;
  }
`

export const ArticleTitle = styled.h1`
  font-size: 28px;
  transition: 100ms;
  color: ${props => props.theme.colors.primary};
`

export const ArticleSubtitle = styled.p`
  font-size: 19px;
  margin-top: 20px;
`

export const ArticleTags = styled.ul`
  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
  & li {
    transition: 100ms;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 4px;
    padding: 4px;
  }
`