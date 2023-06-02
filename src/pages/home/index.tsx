import Image from 'next/image'
import { HomeContainer, HomeInfo } from './styles'
import homeCoverImage from '@/assets/homeCover.svg'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <HomeContainer>
      <HomeInfo>
        <h1>
          Boas vindas a Lacrei <br /> Saúde
        </h1>
        <h3>
          Uma plataforma segura e acolhedora <br /> para comunidade LGBTQIAPN+
        </h3>
        <div className="buttons">
          <button
            className="buttonForUserPersonPage"
            onClick={() => router.push('/pessoa-usuario')}
          >
            Pessoa Usuária
          </button>
          <button
            className="buttonForProfessionalPage"
            onClick={() => router.push('/profissional')}
          >
            Profissional
          </button>
        </div>
      </HomeInfo>
      <Image
        src={homeCoverImage}
        quality={100}
        alt="Imagem ilustrativa de uma médica segurando um formulário, com um celular ao fundo simbolizando o atendimento virtual entre médico e paciente."
      />
    </HomeContainer>
  )
}
