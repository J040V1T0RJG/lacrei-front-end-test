import { MainPageInfo } from '@/components/MainPageInfo'
import { UserPersonContainer } from './styles'
import Image from 'next/image'
import userPersonCoverImage from '@/assets/userPersonCover.svg'

export default function UserPerson() {
  return (
    <UserPersonContainer>
      <MainPageInfo
        title="Pessoa Usuária"
        infoText="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
      />
      <Image
        src={userPersonCoverImage}
        alt="Imagem ilustrativa de pessoas se comunicando com médicos pelo smartphone, com uma representação visual de mensagens enviadas e recebidas ao fundo."
      />
    </UserPersonContainer>
  )
}
