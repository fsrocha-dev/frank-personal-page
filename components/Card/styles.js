import styled from 'styled-components'

export const CardLink = styled.a`
  flex: 1;
  border-radius: 10px;
  padding: 20px;
  background: ${props => props.theme.colors.backgroundTransparent};
  transition: 200ms;
  & h3 {
    font-size: 2.7vh;
  }
  & p {
    margin-top: 15px;
    font-size: 2.1vh;
  }
  &:hover {
    background: ${props => props.theme.colors.backgroundMediumTransparent};
  }
  @media(max-width: 800px) {
    flex: 1 1 100%;
    margin-bottom: 20px;
    width: 100%;
  }
`