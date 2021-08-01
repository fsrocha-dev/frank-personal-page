import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Image from 'next/image'
import Switch from 'react-switch'

export default function Header({ githubData, changeTheme }) {
  const { title, colors } = useContext(ThemeContext)

  return (
    <header>
      <Image
        src={githubData.avatar_url}
        alt={`Foto do usuário ${githubData.name} do github`}
        width={50}
        height={50}
      />
      <h1>{githubData.name}</h1>
      <Switch
        onChange={changeTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={colors.primary}
        onColor={colors.secundary}
      />
    </header>
  )
}

