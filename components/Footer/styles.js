import styled from "styled-components"

export const FooterContainer = styled.footer`
  width: 80vw;
  padding: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    font-size: 18px;
    color: ${props => props.theme.colors.text}
  }
`

export const FooterNav = styled.footer`
  margin-bottom: 15px;
  & a:link {
    margin: 0 10px;
    font-size: 30px;
  }
`