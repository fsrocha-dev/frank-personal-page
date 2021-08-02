import styled from 'styled-components'

export const Container = styled.header`
  width: 95vw;
  padding: 50px 20px 20px 20px;
  display: flex;
  justify-content: flex-end;
`

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  transform: translateX(30px);
  & h1 {
    font-size: 30px;
    margin-top: 16px;
    color: ${props => props.theme.colors.primary}
  }
`

export const ProfileImage = styled.div`
    overflow: hidden;
    width: 150px;
    height: 150px;
    border: 3px solid;
    border-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
`

export const SwitchTheme = styled.div`

`
