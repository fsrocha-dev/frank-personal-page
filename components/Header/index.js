import Image from 'next/image'
export default function Header({ githubData }) {
  return (
    <header>
      <Image
        src={githubData.avatar_url}
        alt={`Foto do usuário ${githubData.name} do github`}
        width={50}
        height={50}

      />
      <h1>{githubData.name}</h1>
    </header>
  )
}

