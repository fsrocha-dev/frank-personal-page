import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Image from 'next/image'
import Switch from 'react-switch'
import { Container, Profile, SwitchTheme, ProfileImage } from './styles.js'

export default function Header({ githubData, changeTheme }) {
  const { title, colors } = useContext(ThemeContext)

  return (
    <Container>
      <Profile>
        <ProfileImage>
          <Image
            src={githubData.avatar_url}
            alt={`Foto do usuário ${githubData.name} do github`}
            width={150}
            height={150}
          />
        </ProfileImage>
        <h1>{githubData.name}</h1>
      </Profile>
      <SwitchTheme>
        <Switch
          onChange={changeTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={colors.primary}
          onColor={colors.primary}
          height={22}
          width={43}
          handleDiameter={20}
        />
      </SwitchTheme>
    </Container>
  )
}

