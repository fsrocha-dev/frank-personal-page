import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 75vw;
  @media(max-width: 800) {
    max-width: 95vw;
  }
  @media(min-width: 1200px) {
    max-width: 60vw;
  }
`

export const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 15px;
  margin-top: 35px;
  transition: 100ms;
  color: ${props => props.theme.colors.text};
`

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media(max-width: 800px) {
   justify-content: center;
  }
`